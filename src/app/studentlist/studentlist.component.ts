import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentserviceService } from '../studentservice.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  studentform= new FormGroup({
    name:new FormControl('',Validators.required),
    gender: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    repeatpassword: new FormControl('',Validators.required),
    course: new FormControl('',Validators.required)
  })
  get name(){return this.studentform.get('name')}
  get gender(){return this.studentform.get('gender')}
  get email(){return this.studentform.get('email')}
  get password(){return this.studentform.get('password')}
  get repeatpassword(){return this.studentform.get('repeatpassword')}
  get course(){return this.studentform.get('course')}

  public students:any=[];
  constructor(private mservice:StudentserviceService){}
 ngOnInit(){
this.mservice.getAllStudent(this.students).subscribe(data=>{
 console.log(data);
 this.students=data;
},error=>{
console.log(error.message)
});



}
}
