export class Student{
    id:number;
    name:string;
    gender:string;
    email:string;
    password:string;
    repeatpassword:string;
    course:string;

    constructor(id,name,gender,email,pwd,pwd1,course){
        this.id=id;
    this.name= name;
    this.gender=gender;
    this.email=email;
    this.password=pwd;
    this.repeatpassword=pwd1;
    this.course= course;
    }
}