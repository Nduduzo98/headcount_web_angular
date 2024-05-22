import { Component } from '@angular/core';
import {MatDialogRef,MatDialog} from '@angular/material/dialog'
import { FormControl } from '@angular/forms';
import { EnterEmisComponent } from '../enter-emis/enter-emis.component';
@Component({
  selector: 'app-t-c-popup',
  templateUrl: './t-c-popup.component.html',
  styleUrls: ['./t-c-popup.component.scss']
})
export class TCPopupComponent {
  constructor(private ref : MatDialogRef<TCPopupComponent> ,public dialog:MatDialog){
    ref.disableClose = true
  }

  checkboxControl = new FormControl(false);


  closeDialog(){
    this.ref.close()
    
  }

  
  openDialog(){
    let dialogRef =  this.dialog.open(EnterEmisComponent ,{
      panelClass: 'emisPop'   
    });  
    this.ref.close()
}
}
