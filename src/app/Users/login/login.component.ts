import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { FormGroup ,FormControl,FormBuilder, Validators} from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  

  loginForm:any
  constructor(public dialog:MatDialog,private formBuilder:FormBuilder,
   private toast: NgToastService, private router:Router,private auth:AuthService ) {
    
    
  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: [null],
      password:[null]
    })
  }

  openDialog(){
    let dialogRef = this.dialog.open(RegisterComponent,{
      panelClass:'tcpopup' 
    })
  }

  onSubmit(){
    if (this.loginForm.valid) {
      
      this.auth.login(this.loginForm.value).subscribe({
        next:(data)=>{
          this.router.navigate(['dashboard'])

          this.toast.success({detail:"SUCCESS",summary:"Login Successful", duration:5000, position: 'topCenter'})

        },
        error:(err)=>{
          console.log(err);
          this.toast.error({detail:"ERROR",summary:err?.error.message, duration:5000, position: 'topCenter'})

        }
      })
    }
  }


}
