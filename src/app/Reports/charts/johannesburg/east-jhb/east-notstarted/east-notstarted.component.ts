import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ReportsService } from 'src/app/services/reports.service';
import { Router } from '@angular/router';
import { LookupService } from 'src/app/services/lookup.service';
import { School } from 'src/app/model/school';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-east-notstarted',
  templateUrl: './east-notstarted.component.html',
  styleUrls: ['./east-notstarted.component.scss']
})
export class EastNotstartedComponent {
  roles: string | null;
  currentUser: any;
  districtName: string | null;
  isDropdownOpen: boolean = false;

  displayedColumns: string[] = [
    'emisNo', 'institutionName', 'principalNameAndSurname'];
     dataSource!: MatTableDataSource<School>;
     districtID: number = 7
     @ViewChild(MatPaginator) paginator!: MatPaginator;
     @ViewChild(MatSort) sort!: MatSort;
  downloadButton: any;

  constructor(private report: ReportsService, private router:Router , private lookup:LookupService,private toast: NgToastService) {
    const currentUserString = sessionStorage.getItem('currentUser')
    this.currentUser = currentUserString ? JSON.parse(currentUserString) : null
    this.roles = sessionStorage.getItem('roles')
    this.districtName = sessionStorage.getItem('districtName')
    
  }
  ngOnInit(): void {
    this.report.getNotStartedByDistrict(this.districtID).subscribe({
      next:(data)=>{
        this.dataSource = new MatTableDataSource(data)
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator

        if (data.length === 0) {
          this.downloadButton = false
        } else {
          this.downloadButton = true
        }
        console.log(data);
        
      }
    })
  }



  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  download(){
    this.report.downloadNotStarted(this.districtID).subscribe({
      next:(data:ArrayBuffer) =>{
        const blob = new Blob([data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Not_Submitted_Report.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        this.toast.success({detail:"Your Pdf Report Has Been Downloaded Successfully",summary:"", duration:10000, position: 'topCenter'})

      }
    })
  }
  downloadExcel(){
    this.report.downloadNotStartedExcel(this.districtID).subscribe(
      (excelBlob: Blob) => {
        // Create a Blob URL for the downloaded Excel file
        const blobUrl = window.URL.createObjectURL(excelBlob);

        // Create an anchor element to trigger the download
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = 'Not_Submitted_Report.xlsx'; // Set the desired Excel file name
        document.body.appendChild(a);
        a.click();

        // Clean up the Blob URL and anchor element
        window.URL.revokeObjectURL(blobUrl);
        document.body.removeChild(a);
        this.toast.success({detail:"Your Excel Report Has Been Downloaded Successfully",summary:"", duration:10000, position: 'topCenter'})
      },
      (error) => {
        console.error('Error downloading Excel file:', error);
      }
    );
  }

}
