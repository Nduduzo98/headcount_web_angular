import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {Chart, registerables} from 'node_modules/chart.js'
import { ReportsService } from 'src/app/services/reports.service';
import { Router } from '@angular/router';
import { LookupService } from 'src/app/services/lookup.service';
Chart.register(...registerables)
import { HttpClient } from '@angular/common/http';
import { MsalService } from '@azure/msal-angular';

const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';

type ProfileType = {
  givenName?: string,
  surname?: string,
  userPrincipalName?: string,
  id?: string,
  
};
@Component({
  selector: 'app-reports-nav',
  templateUrl: './reports-nav.component.html',
  styleUrls: ['./reports-nav.component.scss']
})
export class ReportsNavComponent {
  private breakpointObserver = inject(BreakpointObserver);

  allDistrict:boolean = true
  joburg:boolean = false
  ekurhuleni:boolean = false
  gauteng:boolean = false
  sedibeng:boolean = false
  tshwane:boolean = false
  
  allDistrictOfficial:boolean = true
  completedTable:boolean = false
  notStartedTable:boolean = false
  inProgressTable:boolean = false

  inProgress:any
  label:any
  notStarted: any;
  completed: any;
  data:any
  currentUser:any
  roles:any
  districtResults: any[] = []
  districtName:any
  profile!: ProfileType;

  districts: any;
  districtID = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  constructor(private report: ReportsService, private router:Router , private lookup:LookupService,private http:HttpClient,private authService: MsalService) {
    const currentUserString = sessionStorage.getItem('currentUser')
    this.currentUser = currentUserString ? JSON.parse(currentUserString) : null
    this.roles = sessionStorage.getItem('roles')
    this.districtName = sessionStorage.getItem('districtName')
    
  }

  ngOnInit():void{
    this.getProfile()
  }
  getProfile() {
    this.http.get(GRAPH_ENDPOINT)
      .subscribe(profile => {
        this.profile = profile;
        console.log(profile);
        
      });
  }
  signOut() { // Add log out function here
    this.authService.logoutPopup({
      mainWindowRedirectUri: "/"
    });
  }
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


    getInProgress(){
      this.report.getInProgressByDistrict(this.currentUser.districtID).subscribe({
        next:(res)=>{
          this.inProgress = res
          console.log(this.inProgress)
          if (this.inProgress!=null) {
            
          }
        }
      })
    }
    // getNotStarted(){
    //   this.report.getNotStartedByDistrict().subscribe({
    //     next:(res)=>{
    //       this.notStarted = res
    //       console.log(this.notStarted)
    //     }
    //   })
    //   this.report.getCompletedByDistrict().subscribe({
    //     next:(res)=>{
    //       this.completed = res
          
    //     }
    //   })
      
    //   }

    //   this.RenderChart(this.inProgress,this.notStarted,this.completed)

    // }

    

    showAllDistricts(){
      this.allDistrict = true
      this.joburg = false
      this.ekurhuleni = false
      this.sedibeng = false
      this.gauteng = false
      this.tshwane = false
    }
    showJoburg(){
      this.allDistrict = false
      this.joburg = true
      this.ekurhuleni = false
      this.sedibeng = false
      this.gauteng = false
      this.tshwane = false
    }
    showEkurhuleni(){
      this.allDistrict = false
      this.joburg = false
      this.ekurhuleni = true
      this.sedibeng = false
      this.gauteng = false
      this.tshwane = false
    }
    
    showSedibeng(){
      this.allDistrict = false
      this.joburg = false
      this.ekurhuleni = false
      this.sedibeng = true
      this.gauteng = false
      this.tshwane = false
    }
    showGauteng(){
      this.allDistrict = false
      this.joburg = false
      this.ekurhuleni = false
      this.sedibeng = false
      this.gauteng = true
      this.tshwane = false
    }
    showTshwane(){
      this.allDistrict = false
      this.joburg = false
      this.ekurhuleni = false
      this.sedibeng = false
      this.gauteng = false
      this.tshwane = true
    }

    //
    showAllDistrictOfficial(){

      this.allDistrictOfficial = true
      this.completedTable = false
      this.inProgressTable = false
      this.notStartedTable = false
    }

    showCompleted(){
      this.allDistrictOfficial = false
      this.completedTable = true
      this.inProgressTable = false
      this.notStartedTable = false
    }

    showInProgress(){
      this.allDistrictOfficial = false
      this.completedTable = false
      this.inProgressTable = true
      this.notStartedTable = false
    }

    showNotStarted(){
      this.allDistrictOfficial = false
      this.completedTable = false
      this.inProgressTable = false
      this.notStartedTable = true
    }

    isGdeOfficial(){
      const roles = sessionStorage.getItem('roles')
     
     return roles && roles.includes("HeadOffice")
    }

    isDistrictOfficial(){
      const roles = sessionStorage.getItem('roles')
     
     return roles && roles.includes("DistrictOfficial")
    }

    logout() {
      // Clear the stored user information and roles from the session storage
      sessionStorage.removeItem('currentUser');
      sessionStorage.removeItem('roles');
      sessionStorage.removeItem('token');

      this.router.navigate(['login'])
    }
}
