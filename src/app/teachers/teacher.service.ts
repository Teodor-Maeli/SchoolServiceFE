import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private httpClient: HttpClient) { }


  apiUrl: string = 'http://localhost:9091/teachers/'
  
getAll(page:number,size:number,order:string):Observable<any>{
  return this.httpClient.get(this.apiUrl+"all?page="+page+"&size="+size+"&order="+order);
}

save(teacher:any):Observable<any>{
   return this.httpClient.post<any>(this.apiUrl+"save", teacher,);
}

delete(id:number):Observable<any>{
  return this.httpClient.delete(this.apiUrl+id,{responseType:'text'});
}



}
