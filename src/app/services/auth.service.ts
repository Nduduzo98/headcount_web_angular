import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable, map } from 'rxjs';
import { NgToastService } from 'ng-angular-popup';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private toast: NgToastService) { 
  }

  register(data:any){
    return this.http.post<any>(`${environment.headCountUrl}/headcountsurvey/register`,data)
  }

  login(data:any){
    return this.http.post<any>(`${environment.headCountUrl}/headcountsurvey/login`,data).pipe(map(user =>{
      const token = user.results.token
      const role = user.results.roles
      const userDetails = user.results.user
      const districtName = user.results.districtName

      console.log(role);
      
      if (token) {
        sessionStorage.setItem('token',token)
        sessionStorage.setItem('currentUser',JSON.stringify(userDetails))
        sessionStorage.setItem('roles',JSON.stringify(role))
        sessionStorage.setItem('districtName',JSON.stringify(districtName))

      
        
      }
    }))
  }

  sendOtp(data:any){
    return this.http.post<any>(`${environment.headCountUrl}/headcountsurvey/sendotp`,data)
  }

  verifyOtp(data:any){
    return this.http.post<any>(`${environment.headCountUrl}/headcountsurvey/verifyOtp`,data)
  }
}
