import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeadCountServiceService {

  constructor(private http: HttpClient) { 
  }

  getSchoolDetails(emisNumber:any){
    return this.http.get<any>(`${environment.headCountUrl}/school/${emisNumber}`)
  }
  getSurveyDetails(emisNumber:any){
    return this.http.get<any>(`${environment.headCountUrl}/school/survey/${emisNumber}`)
  }
//School Survey APIS
  saveToSchoolSurvey(data:any){
    return this.http.post<any>(`${environment.headCountUrl}/headcountsurvey/schoolSurvey`,data)
  }
  getDetailsByEmisAndYear(emisNumber:any){
    return this.http.get<any>(`${environment.headCountUrl}/headcountsurvey/getSchoolDetails/${emisNumber}`)
  }
  getSurveyById(id:number){
    return this.http.get<any>(`${environment.headCountUrl}/headcountsurvey/getSurveyById/${id}`)

  }
  updateSchoolSurvey(data:any){
    return this.http.patch<any>(`${environment.headCountUrl}/headcountsurvey/UpdateSchoolDetails`,data)
  }

  //Leaners Per class APIS
  saveSurveyDetails(data:any){
    return this.http.post<any>(`${environment.headCountUrl}/headcountsurvey/SaveSurveyDetails`,data)
  }
  UpdateSurveyDetails(id:number,data:any){
    return this.http.patch<any>(`${environment.headCountUrl}/headcountsurvey/UpdateSurveyDetails/${id}`,data)
  }
  getSurveyDetailsById(id:number){
    return this.http.get<any>(`${environment.headCountUrl}/headcountsurvey/getSurveyDetailsById/${id}`)
  }
  getSurveyDetailsByEmisNo(emisNumber:any ){
    return this.http.get<any>(`${environment.headCountUrl}/headcountsurvey/surveydetails/${emisNumber}`)
  }

  //Repeaters API
  saveRepeaters(data:any){
    return this.http.post<any>(`${environment.headCountUrl}/headcountsurvey/SaveRepeatersSurveyDetails`,data)
  }
  getRepeaters(emisNumber:any){
    return this.http.get<any>(`${environment.headCountUrl}/headcountsurvey/GetRepeatersSurveyDetails/${emisNumber}`)
  }
  updateRepeaters(data:any){
    return this.http.patch<any>(`${environment.headCountUrl}/headcountsurvey/UpdateRepeatersSurveyDetails`,data)
  }
  getRepeatersById(id:number){
    return this.http.get<any>(`${environment.headCountUrl}/headcountsurvey/getRepeatersDetailsById/${id}`)
  }

  //Home language API
  saveHomeLanguages(data:any){
    return this.http.post<any>(`${environment.headCountUrl}/headcountsurvey/SaveSurveyHomeLanguage`,data)
  }
  getHomeLanguages(emisNumber:any){
    return this.http.get<any>(`${environment.headCountUrl}/headcountsurvey/GetSurveyHomeLanguage/${emisNumber}`)
  }
  updateHomeLanguages(data:any){
    return this.http.patch<any>(`${environment.headCountUrl}/headcountsurvey/UpdateSurveyHomeLanguage`,data)
  }
  getHomeLanguagesById(id:number){
    return this.http.get<any>(`${environment.headCountUrl}/headcountsurvey/getSchoolHomeDetailsById/${id}`)
  }


  //Learner Migration API

  saveMigration(data:any){
    return this.http.post<any>(`${environment.headCountUrl}/headcountsurvey/SaveSurveyMigration`,data)

  }
  getMigrations(emisNumber:any){
    return this.http.get<any>(`${environment.headCountUrl}/headcountsurvey/GetSurveyMigration/${emisNumber}`)
  }
  updateMigration(data:any){
    return this.http.patch<any>(`${environment.headCountUrl}/headcountsurvey/UpdateSurveyMigration`,data)
  }
  getMigrationById(id:number){
    return this.http.get<any>(`${environment.headCountUrl}/headcountsurvey/getMigrationById/${id}`)
  }

  //Personnel Information API
  savePersonnel(data:any){
    return this.http.post<any>(`${environment.headCountUrl}/headcountsurvey/SaveSurveyPersonnel `,data)
  }
  getPersonnel(emisNumber:any){
    return this.http.get<any>(`${environment.headCountUrl}/headcountsurvey/GetSurveyPersonnel/${emisNumber}`)
  }
  updatePersonnel(data:any){
    return this.http.patch<any>(`${environment.headCountUrl}/headcountsurvey/UpdateSurveyPersonnel`,data)
  }
  getPersonnelById(id:number){
    return this.http.get<any>(`${environment.headCountUrl}/headcountsurvey/getPersonnelById/${id}`)
  }

  //Pregnant Learners API
  savePregnant(data:any){
    return this.http.post<any>(`${environment.headCountUrl}/headcountsurvey/SaveSurveyPregnantLearners `,data)
  }
  getPregnantLearners(emisNumber:any){
    return this.http.get<any>(`${environment.headCountUrl}/headcountsurvey/GetSurveyPregnantLearners/${emisNumber}`)
  }
  updatePregnant(data:any){
    return this.http.patch<any>(`${environment.headCountUrl}/headcountsurvey/UpdateSurveyPregnantLearners`,data)
  }
  getPregnantById(id:number){
    return this.http.get<any>(`${environment.headCountUrl}/headcountsurvey/getPregnantById/${id}`)
  }

  //Disability API
  saveDisability(data:any){
    return this.http.post<any>(`${environment.headCountUrl}/headcountsurvey/SaveSurveyDisability `,data)
  }
  getDisability(emisNumber:any){
    return this.http.get<any>(`${environment.headCountUrl}/headcountsurvey/GetSurveyDisability/${emisNumber}`)
  }
  updateDisability(data:any){
    return this.http.patch<any>(`${environment.headCountUrl}/headcountsurvey/UpdateSurveyDisability`,data)
  }
  getDisabilityById(id:number){
    return this.http.get<any>(`${environment.headCountUrl}/headcountsurvey/getSurveyDisabilityById/${id}`)
  }

  //Learner Mortality
  saveLearnerMortality(data:any){
    return this.http.post<any>(`${environment.headCountUrl}/headcountsurvey/saveLearnerMortality`,data)
  }
  getLearnerMortality(emisNumber:any){
    return this.http.get<any>(`${environment.headCountUrl}/headcountsurvey/GetLearnerMortality/${emisNumber}`)
  }
  updateLearnerMortality(data:any){
    return this.http.patch<any>(`${environment.headCountUrl}/headcountsurvey/UpdateLearnerMortality`,data)
  }
  getLearnerMortalityById(id:number){
    return this.http.get<any>(`${environment.headCountUrl}/headcountsurvey/getLearnerMortalityById/${id}`)
  }

 //Personnel Mortality
 savePersonnelMortality(data:any){
  return this.http.post<any>(`${environment.headCountUrl}/headcountsurvey/savePersonnelMortality`,data)
}
getPersonnelMortality(emisNumber:any){
  return this.http.get<any>(`${environment.headCountUrl}/headcountsurvey/GetPersonnelMortality/${emisNumber}`)
}
updatePersonnelMortality(data:any){
  return this.http.patch<any>(`${environment.headCountUrl}/headcountsurvey/UpdatePersonnelMortality`,data)
}
getPersonnelMortalityById(id:number){
  return this.http.get<any>(`${environment.headCountUrl}/headcountsurvey/getPersonnelMortalityById/${id}`)
}
  //Download Survey

  downloadSurvey(emisNumber:any):Observable<ArrayBuffer>{
    const url = `${environment.headCountUrl}/headcountsurvey/downloadPdf/${emisNumber}`;
    
    return this.http.get(url, {
      responseType: 'arraybuffer'
    });
  }

}
