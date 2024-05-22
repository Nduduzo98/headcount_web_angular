import { Component,Inject,OnInit } from '@angular/core';
import {MatDialogRef,MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { FormGroup ,FormControl,FormBuilder, Validators} from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { LookupService } from 'src/app/services/lookup.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registrationForm:any
  districts:any
  persal:any = ''
  constructor(private formBuilder:FormBuilder,
    private ref:MatDialogRef<RegisterComponent>,private toast: NgToastService, private lookup:LookupService, private router:Router,private auth:AuthService) {
      ref.disableClose = true
  }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      cellPhone: ['',[ Validators.required,Validators.pattern(/^[0-9]+$/)]],
      roleID: [2, Validators.required],
      fullName: [''],
      lastName: [''],
      districtID: [, Validators.required],
      persalNo:['', [ Validators.required,Validators.pattern(/^[0-9]+$/)]]
    });

    this.registrationForm.valueChanges.subscribe((formValue:any) =>{
this.persal = formValue.persalNo
    })
    this.getDistricts()
  }

  closeDialog(){
    this.ref.close()
  }

  getDistricts(){
    this.lookup.getDistricts().subscribe({
      next:(data)=>{
        this.districts = data
      }
    })
  }

  onSubmit(form:any){
    if (this.registrationForm.valid) {
      let details:any = {
        userName: form.userName,
        fullName: form.fullName,
        lastName:form.lastName,
        cellPhone: form.cellPhone,
        email: form.email,
        password:form.password,
        districtID: form.districtID,
        roleID: form.roleID
      }

      this.auth.register(details).subscribe({
        next:(res)=>{
          this.ref.close()
          this.toast.success({detail:"Success",summary:res.message, duration:5000, position: 'topCenter'})
        },
        error:(err)=>{
          this.toast.error({detail:"ERROR",summary:err?.error.message, duration:5000, position: 'topCenter'})
          }
      })
    }
  }
}
