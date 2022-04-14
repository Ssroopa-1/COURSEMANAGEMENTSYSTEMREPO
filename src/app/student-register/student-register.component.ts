import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormControl  } from '@angular/forms';
import { StudentserviceService } from '../studentservice.service';
import { Student } from '../Student';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})

export class StudentRegisterComponent implements OnInit{
  
  name:string;
  gender:string;
  emailid:string;
  pwd:string;
  pwd1:string;
  course:string;
  student:Student;
  msg:string="SUCCESS";
  flag:boolean=false;
  id:number=2;
  constructor(private mservice:StudentserviceService){}
  store(data){
    console.log(data.value);
    
    this.name=data.value.name;
    this.gender=data.value.gender;
    this.emailid=data.value.emailid;
    this.pwd=data.value.pwd;
    this.pwd1=data.value.pwd1;
    this.course=data.value.course;
    this.student = new Student( this.id,this.name, this.gender, this.emailid, this.pwd, this.pwd1, this.course);
    this.mservice.storeData(this.student)
    .subscribe((data1)=>{
      console.log(data1)
      this.msg=data1;
      this.flag=true;
    });
    
  }
  ngOnInit() {  
    
  }

  
}
