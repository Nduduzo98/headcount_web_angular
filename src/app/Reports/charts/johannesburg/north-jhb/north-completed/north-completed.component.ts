import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ReportsService } from 'src/app/services/reports.service';
import { Router } from '@angular/router';
import { LookupService } from 'src/app/services/lookup.service';
import { School } from 'src/app/model/school';
import { NgToastService } from 'ng-angular-popup';
import { HeadCountServiceService } from 'src/app/services/head-count-service.service';

@Component({
  selector: 'app-north-completed',
  templateUrl: './north-completed.component.html',
  styleUrls: ['./north-completed.component.scss']
})
export class NorthCompletedComponent {
  roles: string | null;
  currentUser: any;
  districtName: string | null;
  isDropdownOpen: boolean = false;
  emisNumbers:string[]=[]
  institutionName:string[]=[]
  completedTable:boolean = false
  notStartedTable:boolean = false
  inProgressTable:boolean = false
  displayedColumns: string[] = [
    'emisNo','institutionName','action'];
     dataSource!: MatTableDataSource<School>;
   
     @ViewChild(MatPaginator) paginator!: MatPaginator;
     @ViewChild(MatSort) sort!: MatSort;
  emisNumbersAndNames: any;
    districtID: number = 8
  downloadButton: any;
  constructor(private report: ReportsService, private router:Router , private lookup:LookupService,private toast: NgToastService,private head:HeadCountServiceService) {
    const currentUserString = sessionStorage.getItem('currentUser')
    this.currentUser = currentUserString ? JSON.parse(currentUserString) : null
    this.roles = sessionStorage.getItem('roles')
    this.districtName = sessionStorage.getItem('districtName')
    
  }
  ngOnInit(): void {
    this.report.getCompletedByDistrict(this.districtID).subscribe({
      next:(data)=>{
        this.dataSource = new MatTableDataSource(data)
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
        console.log(data)
        this.emisNumbers = data.map((item:School) => item.emisNo || '')
        this.institutionName = data.map((item:School)=> item.institutionName || '')
        this.emisNumbersAndNames = data.map((item:School) => {
          return {
            emisNo:item.emisNo || '',
            institutionName:item.institutionName || ''
          }
        })

        if (data.length === 0) {
          this.downloadButton = false
        } else {
          this.downloadButton = true
        }
        console.log(this.institutionName)
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
    this.report.downloadCompleted(this.districtID).subscribe({
      next:(data:ArrayBuffer) =>{
        const blob = new Blob([data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Submitted_Report.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        this.toast.success({detail:"Your Pdf Report Has Been Downloaded Successfully",summary:"", duration:10000, position: 'topCenter'})

      }
    })
  }
  downloadExcel(){
    this.report.downloadCompletedExcel(this.districtID).subscribe(
      (excelBlob: Blob) => {
        // Create a Blob URL for the downloaded Excel file
        const blobUrl = window.URL.createObjectURL(excelBlob);

        // Create an anchor element to trigger the download
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = 'Submitted_Report.xlsx'; // Set the desired Excel file name
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

  downloadSurvey(row:any){
    this.head.downloadSurvey(row.emisNo).subscribe({
      next:(data:ArrayBuffer) =>{
        const blob = new Blob([data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = row.emisNo+'_'+row.institutionName +'.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        this.toast.success({detail:"Survey for "+row.institutionName+ " Has Been Downloaded Successfully",summary:"", duration:10000, position: 'topCenter'})

      }
    })
  }

  downloadAllSurvey(){
    for(const emisNumberAndName of this.emisNumbersAndNames){
      this.head.downloadSurvey(emisNumberAndName.emisNo).subscribe({
        next:(data:ArrayBuffer) =>{
          const blob = new Blob([data], { type: 'application/pdf' });
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = emisNumberAndName.emisNo+'_'+emisNumberAndName.institutionName +'.pdf';
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
          this.toast.success({detail:"Survey's Has Been Downloaded Successfully",summary:"", duration:10000, position: 'topCenter'})
        }
      })
    }
    
  }
}
