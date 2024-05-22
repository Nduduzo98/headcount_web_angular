import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  currentUser: any;
  roles: string | null;

  constructor(private http: HttpClient) { 
    const currentUserString = sessionStorage.getItem('currentUser')
    this.currentUser = currentUserString ? JSON.parse(currentUserString) : null
    this.roles = sessionStorage.getItem('roles')
  }
  getInProgressByDistrict(districtID:number){
    return this.http.get<any>(`${environment.headCountUrl}/reports/getInProgressByDistrict/${districtID}`)
  }

  downloadInProgress(districtId:number):Observable<ArrayBuffer>{
    const url = `${environment.headCountUrl}/reports/downloadInProgress/${districtId}`;
    return this.http.get(url, {
      responseType: 'arraybuffer'
    });
  }

  
  downloadInprogressExcel(districtId:number):Observable<Blob>{
    const url = `${environment.headCountUrl}/reports/downloadInProgressExcel/${districtId}`;
    return this.http.get(url, {
      responseType: 'blob'
    });
  }

  getCompletedByDistrict(districtId:number){
    return this.http.get<any>(`${environment.headCountUrl}/reports/getCompletedByDistrict/${districtId}`)
  }


  downloadCompleted(districtId:number):Observable<ArrayBuffer>{
    const url = `${environment.headCountUrl}/reports/downloadCompleted/${districtId}`;
    return this.http.get(url, {
      responseType: 'arraybuffer'
    });
  }
  downloadCompletedExcel(districtId:number):Observable<Blob>{
    const url = `${environment.headCountUrl}/reports/downloadCompletedExcel/${districtId}`;
    return this.http.get(url, {
      responseType: 'blob'
    });
  }
  getNotStartedByDistrict(districtId:number){
    return this.http.get<any>(`${environment.headCountUrl}/reports/getNotStartedByDistrict/${districtId}`)
  }
  downloadNotStarted(districtId:number):Observable<ArrayBuffer>{
    const url = `${environment.headCountUrl}/reports/downloadNotStarted/${districtId}`;
    return this.http.get(url, {
      responseType: 'arraybuffer'
    });
  }
  downloadNotStartedExcel(districtId:number):Observable<Blob>{
    const url = `${environment.headCountUrl}/reports/downloadNotStartedInExcel/${districtId}`;
    return this.http.get(url, {
      responseType: 'blob'
    });
  }
  getAllResultsByDistrict(districtID:number){
    return this.http.get<any>(`${environment.headCountUrl}/reports/getAllResultsByDistrict/${districtID}`)
  }

  getAllResults(){
    return this.http.get<any>(`${environment.headCountUrl}/reports/getAllResultsByDistrict`)
  }
  getPerSection(){
    return this.http.get<any[]>(`${environment.headCountUrl}/reports/getTotalsPerSection`)
  }
  downloadSubmissionStat():Observable<ArrayBuffer>{
    const url = `${environment.headCountUrl}/reports/downloadSubmissionStats`;
    return this.http.get(url, {
      responseType: 'arraybuffer'
    });
  }

  downloadSubmissionStatByDistrict(districtID:number):Observable<ArrayBuffer>{
    const url = `${environment.headCountUrl}/reports/downloadSubmissionStatsByDistrict/${districtID}`;
    return this.http.get(url, {
      responseType: 'arraybuffer'
    });
  }
}
