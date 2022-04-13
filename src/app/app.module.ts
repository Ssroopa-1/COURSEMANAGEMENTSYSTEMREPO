import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { InstructorLoginComponent } from './instructor-login/instructor-login.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { InstructorRegisterComponent } from './instructor-register/instructor-register.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { InstructorComponent } from './instructor/instructor.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';


@NgModule({
  declarations:
  
  [
     AppComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    AdminLoginComponent,
    StudentLoginComponent,
    InstructorLoginComponent,
    StudentRegisterComponent,
    InstructorRegisterComponent,
    RegisterComponent,
    AdminComponent,
    StudentComponent,
    InstructorComponent,
    StudentlistComponent,
    StudentdashboardComponent,
   
    
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,HttpClientModule,
 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
