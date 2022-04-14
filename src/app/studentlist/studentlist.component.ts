import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentserviceService } from '../studentservice.service';
import { Student } from '../Student';
@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  name1:string;
  gender1:string;
  emailid:string;
  pwd:string;
  pwd1:string;
  course1:string;
  student:Student;
  sample: any;
  msg:string="SUCCESS";
  flag:boolean=false;
  id:number=2;
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
  storeDataADD(data){

    console.log(data.value);
    
    this.name1=data.value.name;
    this.gender1=data.value.gender;
    this.emailid=data.value.emailid;
    this.pwd=data.value.pwd;
    this.pwd1=data.value.pwd1;
    this.course1=data.value.course;
    this.student = new Student( this.id,this.name1, this.gender1, this.emailid, this.pwd, this.pwd1, this.course1);
    this.mservice.storeData(this.student)
    .subscribe((data1)=>{
      console.log(data1)
      this.msg=data1;
      this.flag=true;
    });
    
  }
  deleteData1(id:number){
    if(confirm('Confirm Delete')){
      this.mservice.deleteData(id).subscribe(data1=>{
        this.students=data1;
      });
    }
  }
  deleteallstudents(){
    this.mservice.deleteallData().subscribe(data2=>{
      this.students= data2;
    });
  }
  updatestudent(data){
   this.id = data.value.id;
   this.emailid = data.value.emailid;
   this.student = new Student( this.id,this.name1, this.gender1, this.emailid, this.pwd, this.pwd1, this.course1);
   this.mservice.updateData(this.student).subscribe(data=>{
      this.students= data;
   });

  }
 ngOnInit(){
this.mservice.getAllStudent(this.students).subscribe(data=>{
 console.log(data);
 this.students=data;
},error=>{
console.log(error.message)
});
}
}
