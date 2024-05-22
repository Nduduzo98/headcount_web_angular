import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SchoolGeneralDetails } from 'src/app/model/school-general-details';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HeadCountServiceService } from 'src/app/services/head-count-service.service';
import { FormBuilder } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { LookupService } from 'src/app/services/lookup.service';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-complete-survey',
  templateUrl: './complete-survey.component.html',
  styleUrls: ['./complete-survey.component.scss']
})
export class CompleteSurveyComponent {
  private breakpointObserver = inject(BreakpointObserver);
  survey: any;
  schoolDetails: SchoolGeneralDetails;
  surveyDetails:any
  emisNumber: any;

  constructor(private head:HeadCountServiceService, private formBuilder:FormBuilder
    ,private toast: NgToastService, private change:ChangeDetectorRef, private lookup:LookupService, public dialog:MatDialog,private router :Router) {
   const schoolString = sessionStorage.getItem('schoolDetails')
   this.schoolDetails = schoolString ? JSON.parse(schoolString) :null


   const surveyString = sessionStorage.getItem('schoolSurveyDetails')
   this.surveyDetails = surveyString ? JSON.parse(surveyString) : null
   const emisString  = sessionStorage.getItem('emisNo')
   this.emisNumber =  emisString? JSON.parse(emisString) : null
   
  }


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    cancelSurvey(){
      sessionStorage.removeItem('schoolDetails');
      sessionStorage.removeItem('schoolSurveyDetails');
      sessionStorage.removeItem('learnerPerClassDetails');
      sessionStorage.removeItem('repeaters')
      sessionStorage.removeItem('homeLanguages')
      sessionStorage.removeItem('migrations')
      sessionStorage.removeItem('personnel')
      sessionStorage.removeItem('emisNo')
      sessionStorage.removeItem('pregnant')
      
     
      sessionStorage.removeItem('disability')
      sessionStorage.removeItem('personnelMortality')
   
      sessionStorage.removeItem('learnersMortality')
      this.router.navigate(['home'])
    }


    download(){
      this.head.downloadSurvey(this.emisNumber).subscribe({
        next:(data:ArrayBuffer) =>{
          const blob = new Blob([data], { type: 'application/pdf' });
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = this.emisNumber+'_'+this.schoolDetails.institutionName +'.pdf';
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
          this.toast.success({detail:"Your Survey Has Been Downloaded Successfully",summary:"", duration:10000, position: 'topCenter'})

        }
      })
    }

    edit(){
      this.router.navigate(['survey'])
    }
}
