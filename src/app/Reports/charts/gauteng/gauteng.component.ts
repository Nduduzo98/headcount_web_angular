import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {Chart, registerables} from 'node_modules/chart.js'
import { ReportsService } from 'src/app/services/reports.service';
import { Router } from '@angular/router';
import { LookupService } from 'src/app/services/lookup.service';
Chart.register(...registerables)

@Component({
  selector: 'app-gauteng',
  templateUrl: './gauteng.component.html',
  styleUrls: ['./gauteng.component.scss']
})
export class GautengComponent {
  inProgress:any
  panelOpenState:boolean=true
  label:any
  notStarted: any;
  completed: any;
  data:any
  currentUser:any
  roles:any
  districtName:any
  districts: any;
  districtID = [3,4,5]
  constructor(private report: ReportsService, private router:Router , private lookup:LookupService) {
    const currentUserString = sessionStorage.getItem('currentUser')
    this.currentUser = currentUserString ? JSON.parse(currentUserString) : null
    this.roles = sessionStorage.getItem('roles')
    this.districtName = sessionStorage.getItem('districtName')
  }

  ngOnInit():void{

for(const dist of this.districtID){
  this.lookup.getDistrictNameByID(dist).subscribe({
    next:(names)=>{
      const districtName = names.districtName
      this.report.getAllResultsByDistrict(dist).subscribe(result => {
        this.data = result
        if (this.data!=null) {
          this.notStarted = this.data.notStarted
          this.completed = this.data.completed
          this.inProgress = this.data.inProgress
          console.log(this.notStarted )
          const chartID = 'bar-chart-' + dist;
          this.RenderChart(chartID,districtName,this.inProgress,this.notStarted,this.completed)
        }
      })
    }
  })
  
}


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
}
