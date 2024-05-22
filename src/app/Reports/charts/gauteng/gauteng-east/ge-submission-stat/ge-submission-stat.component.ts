

import { Component, ViewChild, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {Chart, registerables} from 'node_modules/chart.js'
import { ReportsService } from 'src/app/services/reports.service';
import { Router } from '@angular/router';
import { LookupService } from 'src/app/services/lookup.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { School } from 'src/app/model/school';
import { NgToastService } from 'ng-angular-popup';



@Component({
  selector: 'app-ge-submission-stat',
  templateUrl: './ge-submission-stat.component.html',
  styleUrls: ['./ge-submission-stat.component.scss']
})
export class GeSubmissionStatComponent {

  displayedColumns: string[] = [
    'districtName','totalSchools','completed','notStarted'];
     dataSource!: MatTableDataSource<School>;
     @ViewChild(MatPaginator) paginator!: MatPaginator;
     @ViewChild(MatSort) sort!: MatSort;
     districtID: number = 3
  districtName:any
  constructor(private report: ReportsService, private router:Router , private lookup:LookupService,private toast: NgToastService) {
   
  }

  ngOnInit():void{
    this.report.getAllResultsByDistrict(this.districtID).subscribe({
      next:(data)=>{
        const dataArray :School = 
          {
            districtName: data.districtName, // You can set this as desired
            completed: data.completed,
            inProgress: data.inProgress,
            notStarted: data.notStarted,
            totalSchools: data.totalSchools
          }
        this.districtName = data.districtName
        const details: School[] = [dataArray]
        
        this.dataSource = new MatTableDataSource(details)
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  downloadSubmissionStatsByDistrict(){
    this.report.downloadSubmissionStatByDistrict(this.districtID).subscribe({
      next:(data:ArrayBuffer) =>{
        const blob = new Blob([data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = this.districtName+'_Submission_Statistics.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        this.toast.success({detail:"Submission Statistics Has Been Downloaded Successfully",summary:"", duration:10000, position: 'topCenter'})

      }
    })
  }
}
