import { Component } from '@angular/core';
import {MatDialogRef,MatDialog} from '@angular/material/dialog'
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SchoolGeneralComponent } from 'src/app/modules/schoolgeneraldetails/school-general/school-general.component';
@Component({
  selector: 'app-popia',
  templateUrl: './popia.component.html',
  styleUrls: ['./popia.component.scss']
})
export class PopiaComponent {
  schoolDetails: any;

  constructor(private ref : MatDialogRef<PopiaComponent> ,public dialog:MatDialog,private router :Router){
    ref.disableClose = true
    const schoolString = sessionStorage.getItem('schoolDetails')
    this.schoolDetails = schoolString ? JSON.parse(schoolString) :null
  }

  checkboxControl = new FormControl(false);


  closeDialog(){
    this.ref.close()
  }

  acceptPopia(){
  //   let dialogRef = this.dialog.open(SchoolGeneralComponent,{
  //     panelClass: 'schoolGerenalComp' ,
     
  //    })
  //   this.ref.close()
  let url: string = `school/${this.schoolDetails.emisNo}`
  console.log(url);
  
    this.router.navigate([url])
    this.ref.close()
  }
}
