import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentsService {

  constructor(private httpClient: HttpClient) { }

  apiUrl: string = 'http://localhost:9091/enrollments/'

  getAll():Observable<any>{
    return this.httpClient.get(this.apiUrl+'all')
  }


  send(cId:number,sId:number):Observable<any>{
    return this.httpClient.post(this.apiUrl+'enroll/'+cId+'/'+sId,'send');
  }


  delete(sId:number):Observable<any>{
    return this.httpClient.delete(this.apiUrl+sId)

  }
}
