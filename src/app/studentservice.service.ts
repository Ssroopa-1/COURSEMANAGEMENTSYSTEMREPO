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

  updateData(students:any){
    console.log(students);
    return this.http.put(this.baseURL+"update",students,{responseType:"text"});
   
  }

  getAllStudent(student:any){
    console.log(student);
    return this.http.get(this.baseURL+"getallstudents",student);
   
  }
  deleteData(id){
    return this.http.delete(this.baseURL+"delete/"+id);
  }
  deleteallData(){
    return this.http.delete(this.baseURL+"deleteall");
  }
}
