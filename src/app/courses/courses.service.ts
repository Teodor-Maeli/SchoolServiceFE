import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) {
   }

   apiUrl: string = 'http://localhost:9091/courses/'


   getAll(page:number,size:number,order:string):Observable<any>{
    return this.httpClient.get(this.apiUrl+"all?page="+page+"&size="+size+"&order="+order)

   }


   send(course:any){
    return this.httpClient.post(this.apiUrl+'save',course,{responseType: 'text'}).subscribe((r)=>{
     
    })
   }

   delete(id:number):Observable<any>{
    return this.httpClient.delete(this.apiUrl+id,{responseType:'text'})
  }


  assignTeacher(courseId:number,teacherId:number){
    console.log(courseId)
    return this.httpClient.post(this.apiUrl+'/'+courseId+'/'+teacherId, "posted")
  }
}
