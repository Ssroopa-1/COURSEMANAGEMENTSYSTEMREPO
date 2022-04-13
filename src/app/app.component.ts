import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    registerForm:FormGroup;
   constructor(){
     this.registerForm=new FormGroup({
      firstname:new FormControl("",[Validators.required]),
      lastname:new FormControl("",[Validators.required]),
      username:new FormControl("",[Validators.required]),
      confirmusername:new FormControl("",[Validators.required]),
      password:new FormControl("",[Validators.required,Validators.minLength(8)]),
     confirmpassword:new FormControl("",[Validators.required,Validators.minLength(8)])
     });
   }

   get username(){
       console.log(this.username);
     return this.registerForm.get('username');
   }

   get confirmusername(){
    return this.registerForm.get('confirmusername');
  }
  get firstname(){
    return this.registerForm.get('firstname');
  }
  get lastname(){
    return this.registerForm.get('lastname');
  }
  get password(){
    return this.registerForm.get('password');
  }
  get confirmpassword(){
    return this.registerForm.get('confirmpassword');
  }
}