import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  apiUrl: string = 'http://localhost:9091/students/'

  constructor(private httpClient:HttpClient) { }


getAll(page:number,size:number,order:string): Observable<any>{
  return this.httpClient.get(this.apiUrl+"all?page="+page+"&size="+size+"&order="+order)
}

save(student:any):Observable<any>{
  return this.httpClient.post(this.apiUrl+'save',student)
}

delete(id:number):Observable<any>{
  return this.httpClient.delete(this.apiUrl+id,{responseType:'text'})
}


}
