import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {
  baseURL:string="http://localhost:9003/api/";
  constructor(private http:HttpClient) { }

  storeData(student:any){
    console.log(student);
    return this.http.post(this.baseURL+"savestudent",student,{responseType:"text"});
  }

  updateData(student:any){
    console.log(student);
    return this.http.put(this.baseURL+"update",student,{responseType:"text"});
   
  }

  getAllStudent(student:any){
    console.log(student);
    return this.http.get(this.baseURL+"getallstudents",student);
   
  }
}
