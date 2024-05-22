import { Component, ViewChild, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {Chart, registerables} from 'node_modules/chart.js'
import { ReportsService } from 'src/app/services/reports.service';
import { Router } from '@angular/router';
import { LookupService } from 'src/app/services/lookup.service';
import { HeadCountServiceService } from 'src/app/services/head-count-service.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { School } from 'src/app/model/school';
import { NgToastService } from 'ng-angular-popup';
Chart.register(...registerables)

@Component({
  selector: 'app-district-official',
  templateUrl: './district-official.component.html',
  styleUrls: ['./district-official.component.scss']
})
export class DistrictOfficialComponent {
  inProgress:any
  label:any
  notStarted: any;
  completed: any;
  data:any
  currentUser:any
  roles:any
  districtName:any
  districts: any;
  panelOpenState:boolean=true
  districtID = [6,7,8,9,10]

  displayedColumns: string[] = [
    'districtName','totalSchools','completed','notStarted'];
     dataSource!: MatTableDataSource<School>;
     @ViewChild(MatPaginator) paginator!: MatPaginator;
     @ViewChild(MatSort) sort!: MatSort;
   
  constructor(private report: ReportsService, private router:Router , private lookup:LookupService,private head:HeadCountServiceService,private toast: NgToastService) {
    const currentUserString = sessionStorage.getItem('currentUser')
    this.currentUser = currentUserString ? JSON.parse(currentUserString) : null
    this.roles = sessionStorage.getItem('roles')
    this.districtName = sessionStorage.getItem('districtName')
  }
  
  ngOnInit():void{
  this.lookup.getDistrictNameByID(this.currentUser.districtID).subscribe({
    next:(names)=>{
      const districtName = names.districtName
      this.report.getAllResultsByDistrict(this.currentUser.districtID).subscribe(result => {
        this.data = result
        if (this.data!=null) {
          this.notStarted = this.data.notStarted
          this.completed = this.data.completed
          this.inProgress = this.data.inProgress
          console.log(this.notStarted )
          const chartID = 'bar-chart' ;
          this.RenderChart(chartID,districtName,this.inProgress,this.notStarted,this.completed)
        }
      })
    }
  })

  this.report.getAllResultsByDistrict(this.currentUser.districtID).subscribe({
    next:(data)=>{
      const dataArray :School = 
        {
          districtName: data.districtName, // You can set this as desired
          completed: data.completed,
          inProgress: data.inProgress,
          notStarted: data.notStarted,
          totalSchools: data.totalSchools
        }
      const details: School[] = [dataArray]
      
      this.dataSource = new MatTableDataSource(details)
      this.dataSource.sort = this.sort
      this.dataSource.paginator = this.paginator
    }
  })
}


  RenderChart(chartID:any,districtName:any,inProgress:any ,notStarted:any , completed:any){
    const myChart = new Chart(chartID, {
                      type: 'pie',
                      data: {
                        labels: ['Not Completed '+inProgress, 'Not Submitted '+notStarted,'Submitted '+completed],
                        datasets: [{
                          label: 'Snap survey',
                          data: [inProgress,notStarted, completed ],
                          backgroundColor:['#0099F7','#b92b27','#a8ff78'],
                          borderWidth: 1
                        }]
                      },
                      options: {
                        plugins: {
                          title: {
                            display: true,
                            text: districtName // Set the chart title here
                          }
                        },
                        scales: {
                          y: {
                            beginAtZero: true
                          }
                        }
                      
                      }
                    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  downloadSubmissionStatsByDistrict(){
    this.report.downloadSubmissionStatByDistrict(this.currentUser.districtID).subscribe({
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
