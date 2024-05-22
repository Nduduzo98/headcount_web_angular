import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development'
@Injectable({
  providedIn: 'root'
})
export class LookupService {

  constructor(private http: HttpClient) { 
  }

  getSchoolSystems()
  {
    return this.http.get<any>(`${environment.headCountUrl}/lookup/schoolSystems`)
  }
  getDistricts()
  {
    return this.http.get<any>(`${environment.headCountUrl}/lookup/districts`)
  }
  
  getDistrictNameByID(ID:number)
  {
    return this.http.get<any>(`${environment.headCountUrl}/lookup/districtsbyid/${ID}`)
  }
}
