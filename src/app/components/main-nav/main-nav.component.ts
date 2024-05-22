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
import { SchoolGeneralEditComponent } from 'src/app/modules/schoolgeneraldetails/school-general-edit/school-general-edit.component';
import { LearnersPerclassComponent } from 'src/app/modules/learners&classes/learners-perclass/learners-perclass.component';
import { LearnersPerclassEditComponent } from 'src/app/modules/learners&classes/learners-perclass-edit/learners-perclass-edit.component';
import { RepeatersComponent } from 'src/app/modules/repeatersByGender&Gr/repeaters/repeaters.component';
import { RepeatersEditComponent } from 'src/app/modules/repeatersByGender&Gr/repeaters-edit/repeaters-edit.component';
import { HomeLanguageComponent } from 'src/app/modules/SchoolHomeLanguages/home-language/home-language.component';
import { HomeLanguageEditComponent } from 'src/app/modules/SchoolHomeLanguages/home-language-edit/home-language-edit.component';
import { MigrationsEditComponent } from 'src/app/modules/migrations/migrations-edit/migrations-edit.component';
import { MigrationsComponent } from 'src/app/modules/migrations/migrations/migrations.component';
import { PersonnelComponent } from 'src/app/modules/personnelInfo/personnel/personnel.component';
import { PersonnelEditComponent } from 'src/app/modules/personnelInfo/personnel-edit/personnel-edit.component';
import { PregnantComponent } from 'src/app/modules/pregnant/pregnant/pregnant.component';
import { PregnantEditComponent } from 'src/app/modules/pregnant/pregnant-edit/pregnant-edit.component';
import { SubmitPopiComponent } from '../submit-popi/submit-popi.component';
import { DisabilityComponent } from 'src/app/modules/disability/disability/disability.component';
import { DisabilityEditComponent } from 'src/app/modules/disability/disability-edit/disability-edit.component';
import { LearnerMortalityComponent } from 'src/app/modules/learnersMortality/learner-mortality/learner-mortality.component';
import { LearnerMortalityEditComponent } from 'src/app/modules/learnersMortality/learner-mortality-edit/learner-mortality-edit.component';
import { PersonnelMortalityComponent } from 'src/app/modules/personnelMortality/personnel-mortality/personnel-mortality.component';
import { PersonnelMortalityEditComponent } from 'src/app/modules/personnelMortality/personnel-mortality-edit/personnel-mortality-edit.component';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit{
  schoolDetails: SchoolGeneralDetails;
  surveyDetails:any
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  private breakpointObserver = inject(BreakpointObserver);
  survey: any;
  specialSchool:any
  generalDetailsStatus:number = 2
  institutionType :any
  schoolOfSpecialisation:any

  learnersPerClassStatus:number = 2
  learnerPerClassDetails:any
  surveyDetailsLearner: any;

  repeatersDetails:any
  repeaterStatus:any
  detailsRepeaters:any

  homeLanguagesDetails:any
  homeLanguageStatus:any = 2
  detailsHomeLanguages:any

  migrationsDetails:any
  migrationStatus:any = 2
  detailsMigration:any

  personnelDetails:any
  personnelStatus:any = 2
  detailsPersonnel:any

  pregnantDetails:any
  pregnantStatus:any = 2
ndu:any
  disabilityDetails:any
  disibalityStatus:any = 2

  learnerMortalityDetails:any
  learnerMortalityStatus:any = 2

  
  PersonnelMortalityDetails:any
  PersonnelMortalityStatus:any = 2

  progressValue:any
  progressColor = 'primary'
  progressStatus:any
  progressValueWithDisability:any

  emisNumber: string | null;
  check: any;
  datesubmit:any
  sbmt:boolean = false

  constructor(private head:HeadCountServiceService, private formBuilder:FormBuilder
    ,private toast: NgToastService, private change:ChangeDetectorRef, private lookup:LookupService, public dialog:MatDialog,private router :Router) {
   const schoolString = sessionStorage.getItem('schoolDetails')
   this.schoolDetails = schoolString ? JSON.parse(schoolString) :null


   const surveyString = sessionStorage.getItem('schoolSurveyDetails')
   this.surveyDetails = surveyString ? JSON.parse(surveyString) : null
  
   const learnerString = sessionStorage.getItem('learnerPerClassDetails')
   this.learnerPerClassDetails = learnerString ? JSON.parse(learnerString) : null


   const repeaterString = sessionStorage.getItem('repeaters')
   this.repeatersDetails = repeaterString ? JSON.parse(repeaterString) : null

   const homeString = sessionStorage.getItem('homeLanguages')
   this.homeLanguagesDetails = homeString ? JSON.parse(homeString) : null

   const migrationString = sessionStorage.getItem('migrations')
   this.migrationsDetails = migrationString ? JSON.parse(migrationString) : null

   const personnelString = sessionStorage.getItem('personnel')
   this.personnelDetails = personnelString ? JSON.parse(personnelString) : null

   const pregnantString = sessionStorage.getItem('pregnant')
   this.ndu = pregnantString ? JSON.parse(pregnantString) : null
const emisString  = sessionStorage.getItem('emisNo')
   this.emisNumber =  emisString? JSON.parse(emisString) : null
// console.log();
    const data = sessionStorage['pregnant'];
    this.pregnantDetails=data ? JSON.parse(data) : null

    const dataDisability = sessionStorage['disability'];
    this.disabilityDetails = dataDisability ? JSON.parse(dataDisability) : null

    const learnerMortality = sessionStorage['learnersMortality']
    this.learnerMortalityDetails = learnerMortality ? JSON.parse(learnerMortality) : null

    const personnelMortality = sessionStorage['personnelMortality']
    this.PersonnelMortalityDetails = personnelMortality ? JSON.parse(personnelMortality) : null
  }

  ngOnInit():void{
    
  

   this.datesubmit = this.surveyDetails.progressStatus
   this.institutionType = this.schoolDetails.institutionTypeId
   this.schoolOfSpecialisation = this.schoolDetails.schoolOfSpecialisation
    
    if (this.institutionType !== 1) {
      this.generalDetailsStatus = this.surveyDetails.statusID
      this.progressStatus = this.surveyDetails.progressStatus
      this.learnersPerClassStatus = this.learnerPerClassDetails.statusID
      this.repeaterStatus = this.repeatersDetails.statusID
      this.homeLanguageStatus = this.homeLanguagesDetails.statusID
      this.migrationStatus = this.migrationsDetails.statusID
      this.personnelStatus = this.personnelDetails.statusID
      this.pregnantStatus = this.pregnantDetails.statusID
      this.learnerMortalityStatus = this.learnerMortalityDetails.statusID
      this.PersonnelMortalityStatus = this.PersonnelMortalityDetails.statusID
      if (this.areAllStatusesOne() == true && this.progressStatus == 1) {
        this.progressValue = false
      }
      if (this.areAllStatusesOne() == true && this.progressStatus == 3) {
        this.progressValue = true
        this.progressStatus = 2
      }
      if (this.areAllStatusesOne() == false && this.progressStatus == 3) {
        this.progressValue = false
      }
    }


    if (this.institutionType == 1 && this.schoolOfSpecialisation == false) {
      this.generalDetailsStatus = this.surveyDetails.statusID
      this.progressStatus = this.surveyDetails.progressStatus
      this.learnersPerClassStatus = this.learnerPerClassDetails.statusID
      this.repeaterStatus = this.repeatersDetails.statusID
      this.homeLanguageStatus = this.homeLanguagesDetails.statusID
      this.migrationStatus = this.migrationsDetails.statusID
      this.personnelStatus = this.personnelDetails.statusID
      this.pregnantStatus = this.pregnantDetails.statusID
      this.disibalityStatus = this.disabilityDetails.statusID
      this.learnerMortalityStatus = this.learnerMortalityDetails.statusID
      this.PersonnelMortalityStatus = this.PersonnelMortalityDetails.statusID

      if (this.areAllStatusesOneWithDisability() == true && this.progressStatus == 1) {
        this.progressValue = false
      }
      if (this.areAllStatusesOneWithDisability() == true && this.progressStatus == 3) {
        this.progressValue = true
        this.progressStatus = 2
      }
      if (this.areAllStatusesOneWithDisability() == false && this.progressStatus == 3) {
        this.progressValue = false
      }
      
    }
    if (this.institutionType == 1 && this.schoolOfSpecialisation == true) {
      this.generalDetailsStatus = this.surveyDetails.statusID
      this.progressStatus = this.surveyDetails.progressStatus
      this.learnersPerClassStatus = this.learnerPerClassDetails.statusID
      this.repeaterStatus = this.repeatersDetails.statusID
      this.homeLanguageStatus = this.homeLanguagesDetails.statusID
      this.migrationStatus = this.migrationsDetails.statusID
      this.personnelStatus = this.personnelDetails.statusID
      this.pregnantStatus = this.pregnantDetails.statusID
      this.learnerMortalityStatus = this.learnerMortalityDetails.statusID
      this.PersonnelMortalityStatus = this.PersonnelMortalityDetails.statusID

      if (this.areAllStatusesOne() == true && this.progressStatus == 1) {
        this.progressValue = false
      }
      if (this.areAllStatusesOne() == true && this.progressStatus == 3) {
        this.progressValue = true
        this.progressStatus = 2
      }
      if (this.areAllStatusesOne() == false && this.progressStatus == 3) {
        this.progressValue = false
      }
      
    }
  
    this.getSchoolSurveyDetails()
    this.getLearnerPerclassByEmis()
    this.getRepeaters()
    this.getHomeLanguage()
    this.getMigrations()
    this.getPersonnel()
    this.getPregnant()
    this.getDisability()
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
    editSchoolSurvey(){
      this.head.getSurveyById(this.surveyDetails.id).subscribe((res)=>{
        this.survey = res
        console.log(res)

        let dialogRef = this.dialog.open(SchoolGeneralEditComponent,{
          data:this.survey,
       
          panelClass:'schoolGerenalComp' 
        })
        dialogRef.afterClosed().subscribe(result =>{
          this.getSchoolSurveyDetails()
        })
        

      })
    }

    getSchoolSurveyDetails(){
        this.head.getDetailsByEmisAndYear(this.emisNumber).subscribe({
          next:(data)=>{
            sessionStorage.setItem('schoolSurveyDetails',JSON.stringify(data))
          }, 
          error:(err)=>{  
          }
        })
    }
    editLearners(){
      this.head.getSurveyDetailsById(this.learnerPerClassDetails.id).subscribe((res)=>{
        this.surveyDetailsLearner = res
        console.log(res);

        let dialogRef = this.dialog.open(LearnersPerclassEditComponent,{
          data:this.surveyDetailsLearner,
          panelClass:'learnerComp' 
        })
        dialogRef.afterClosed().subscribe(result => {
          this.getLearnerPerclassByEmis()
        })
      })
    }
    getStatusColor(statusId: number): string {
      if (statusId === 1) {
        return '#6be585';
      } else if (statusId !== 1) {
        return '#dd3e54';
      } else {
        return 'transparent';
      }
    }
    getStatusText(statusId: number): string {
      if (statusId === 1) {
        return 'This is the completed text.';
      } else if (statusId === 2) {
        return 'Not started.';
      } else {
        return 'Default text.';
      }
    }
    addLearners(){

      let dialogRef = this.dialog.open(LearnersPerclassComponent,{
        data:this.survey,
       
        panelClass:'learnerComp'
        
      })

      dialogRef.afterClosed().subscribe(result => {
        this.getLearnerPerclassByEmis()
      })
    }

    addRepeaters(){
      let dialogRef = this.dialog.open(RepeatersComponent,{
        data: this.learnerPerClassDetails,
        panelClass:'repeaterComp'
      })

      dialogRef.afterClosed().subscribe(result => {
        this.getRepeaters()
      })
    }
    editRepeaters(){
      this.head.getRepeatersById(this.repeatersDetails.id).subscribe({
        next:(res)=>{
          this.detailsRepeaters = res
          console.log(res);
          const dialogData = {
            detailsRepeaters : res,
            learnerPerClassDetails: this.learnerPerClassDetails
          }
          let dialogRef = this.dialog.open(RepeatersEditComponent,{
            data: dialogData,
            panelClass:'repeaterComp'

          })
        }
      })

    }
    getLearnerPerclassByEmis(){
        this.head.getSurveyDetailsByEmisNo(this.emisNumber).subscribe({
          next:(data)=>{
    
              sessionStorage.setItem('learnerPerClassDetails',JSON.stringify(data))
              console.log(data);
              
          },
          error:(err)=>{
            console.log(err);
            
          }
        })
    
      
        }
        getRepeaters(){
          
            this.head.getRepeaters(this.emisNumber).subscribe({
              next:(data)=>{
        
                  sessionStorage.setItem('repeaters',JSON.stringify(data))
                  console.log(data);
                  this.repeaterStatus = data.statusID
                  console.log(this.repeaterStatus);
                  
              }
            })
        
          
        }

        addHomeLanguage(){
          let dialogRef = this.dialog.open(HomeLanguageComponent,{
            data: this.learnerPerClassDetails,
            panelClass:'homeLanguageComp'
            
          })
          dialogRef.afterClosed().subscribe(result => {
            this.getHomeLanguage()
          })
          console.log(this.learnerPerClassDetails);
          
        }

        editHomeLanguage(){
          this.head.getHomeLanguagesById(this.homeLanguagesDetails.id).subscribe({
            next:(res)=>{
              this.detailsHomeLanguages = res
    
              console.log(res);
              
              const dialogData = {
                detailsHomeLanguages : res,
                learnerPerClassDetails: this.learnerPerClassDetails
              }
              let dialogRef = this.dialog.open(HomeLanguageEditComponent,{
                data: dialogData,
                panelClass:'homeLanguageComp'

              })
              dialogRef.afterClosed().subscribe(result =>{
                this.getHomeLanguage()
              })
            }
          })
        }

        getHomeLanguage(){
        
            this.head.getHomeLanguages(this.emisNumber).subscribe({
              next:(data)=>{

                  sessionStorage.setItem('homeLanguages',JSON.stringify(data))
                  console.log(data);
              }
            })
        
          
        }

        getMigrations(){
     
            this.head.getMigrations(this.emisNumber).subscribe({
              next:(data)=>{
                this.migrationStatus = data.statusID
                console.log(this.migrationStatus);
                
                sessionStorage.setItem('migrations',JSON.stringify(data))
              }
            })
        
        }

        addMigrations(){
          let dialogRef = this.dialog.open(MigrationsComponent,{
            data: this.learnerPerClassDetails,
            panelClass:'migration'
          })
          dialogRef.afterClosed().subscribe(result => {
            this.getMigrations()
            this.change.detectChanges()
          })
        }

        editMigration(){
          this.head.getMigrationById(this.migrationsDetails.id).subscribe({
            next:(res)=>{
              this.migrationsDetails = res
    
              console.log(res);
              
              const dialogData = {
                migrationsDetails : res,
                learnerPerClassDetails: this.learnerPerClassDetails
              }
              let dialogRef = this.dialog.open(MigrationsEditComponent,{
                data: dialogData,
                panelClass:'migration'
              })
            }
          })
        }


        getPersonnel(){
         
            this.head.getPersonnel(this.emisNumber).subscribe({
              next:(data)=>{
                sessionStorage.setItem('personnel',JSON.stringify(data))
              }
            })
        }

        addPersonnel(){

          let dialogRef = this.dialog.open(PersonnelComponent,{
            panelClass:'personel'
          })
    
          dialogRef.afterClosed().subscribe(result => {
            this.getPersonnel()
          })
        }

        editPersonnel(){
          this.head.getPersonnelById(this.personnelDetails.id).subscribe({
            next:(res)=>{
              this.personnelDetails = res
              console.log(res);
              let dialogRef = this.dialog.open(PersonnelEditComponent,{
                data: res,
                panelClass:'personel'
              })
            }
          })
        }

        getPregnant(){
         
            this.head.getPregnantLearners(this.emisNumber).subscribe({
              next:(data)=>{
                sessionStorage.setItem('pregnant',JSON.stringify(data))
              }
            })
        }
        addPregnant(){

          let dialogRef = this.dialog.open(PregnantComponent,{
            panelClass:'pregnant'
          })
    
          dialogRef.afterClosed().subscribe(result => {
            this.getPregnant()
          })
        }

        editPregnant(){
          this.head.getPregnantById(this.pregnantDetails.id).subscribe({
            next:(res)=>{
              console.log(res);
              let dialogRef = this.dialog.open(PregnantEditComponent,{
                data: res,
                panelClass:'pregnant'

              })
            }
          })
        }


        getDisability(){
          this.head.getDisability(this.emisNumber).subscribe({
            next:(data)=>{
              sessionStorage.setItem('disability',JSON.stringify(data))
            }
          })
        }

        addDisability(){
          let dialogRef = this.dialog.open(DisabilityComponent,{
            panelClass:'disability'

          })
          dialogRef.afterClosed().subscribe(result => {
            this.getDisability()
          })
        }

        editDisability(){
            this.head.getDisabilityById(this.disabilityDetails.id).subscribe({
              next:(res)=>{
                let dialogRef = this.dialog.open(DisabilityEditComponent , {
                  data:res,
                  panelClass:'disability'
                })
              }
            })
        }
        getLearnerMortality(){
          this.head.getLearnerMortality(this.emisNumber).subscribe({
            next:(data)=>{
              sessionStorage.setItem('learnersMortality',JSON.stringify(data))
            }
          })
        }

        addLearnersMortality(){
          let dialogRef = this.dialog.open(LearnerMortalityComponent,{
            panelClass:'learnerMortality'

          })
          dialogRef.afterClosed().subscribe(result => {
            this.getLearnerMortality()
          })
        }

        editLearnersMortality(){
          
            this.head.getLearnerMortalityById(this.learnerMortalityDetails.id).subscribe({
              next:(res)=>{
                let dialogRef = this.dialog.open(LearnerMortalityEditComponent , {
                  data:res,
                  panelClass:'learnerMortality'
                })
              }
            })
        }
        getPersonnelMortality(){
          this.head.getPersonnelMortality(this.emisNumber).subscribe({
            next:(data)=>{
              sessionStorage.setItem('personnelMortality',JSON.stringify(data))
            }
          })
        }

        addPersonnelMortality(){
          let dialogRef = this.dialog.open(PersonnelMortalityComponent,{
            panelClass:'personel'

          })
          dialogRef.afterClosed().subscribe(result => {
            this.getPersonnelMortality()
          })
        }

        editPersonnelMortality(){

          console.log(this.PersonnelMortalityDetails.id );
          
            this.head.getPersonnelMortalityById(this.PersonnelMortalityDetails.id).subscribe({
              next:(res)=>{
                let dialogRef = this.dialog.open(PersonnelMortalityEditComponent , {
                  data:res,
                  panelClass:'personel'
                })
              }
            })
        }


        areAllStatusesOne(): boolean {
          return (
            this.learnersPerClassStatus === 1 &&
            this.repeaterStatus === 1 &&
            this.homeLanguageStatus === 1 &&
            this.migrationStatus === 1 &&
            this.personnelStatus === 1 &&
            this.pregnantStatus === 1 &&
            this.learnerMortalityStatus ===1 &&
            this.PersonnelMortalityStatus ===1
                      
            );
        }

        areAllStatusesOneWithDisability(): boolean {
          return (
            this.learnersPerClassStatus === 1 &&
            this.repeaterStatus === 1 &&
            this.homeLanguageStatus === 1 &&
            this.migrationStatus === 1 &&
            this.personnelStatus === 1 &&
            this.pregnantStatus === 1 &&
            this.disibalityStatus === 1 &&
            this.learnerMortalityStatus ===1 &&
            this.PersonnelMortalityStatus ===1
            );
        }

        download(){
          this.head.downloadSurvey(this.emisNumber).subscribe((data: ArrayBuffer) => {
            const blob = new Blob([data], { type: 'application/pdf' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = this.emisNumber+'_'+this.schoolDetails.institutionName +'.pdf';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            this.toast.success({detail:"Your Survey Has Been Downloaded Successfully",summary:"", duration:10000, position: 'topCenter'})
            this.sbmt = true
          });

        }

        finalSubmit(){
          this.head.getSurveyById(this.surveyDetails.id).subscribe((res)=>{
            this.survey = res
            console.log(res)
            let dialogRef = this.dialog.open(SubmitPopiComponent,{
              data:this.survey,
              width:'50%',
            })
          })
        
        }

        getAllStatus(){

        }

       

        
      

    
}

