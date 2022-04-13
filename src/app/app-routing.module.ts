import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';

const routes: Routes = [

{path:'Admin', component:AdminComponent},


{path:'student', component:StudentComponent},
{path:'instructor', component:InstructorComponent},


  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  
  {
    path:'login',component: LoginComponent, 
    children: [
      {path:'admin-login', component:AdminLoginComponent },
      {path:'studentlist', component:StudentlistComponent},
      {path:'student-login', component:StudentLoginComponent}, 
      {path:'instructor-login', component:InstructorLoginComponent},
      {path:'studentdashboard', component:StudentdashboardComponent} 
    ]
  },
  {
    path:'login/admin-login',redirectTo: '/studentlist' 
  },
  {
    path:'studentlist',component:StudentlistComponent  
  },
  {
    path:'login/student-login',component: LoginComponent, 
    children: [
      {path:'studentdashboard', component:StudentdashboardComponent}
    ]
  },
  {
    path:'login/admin-login',component: LoginComponent, 
    children: [
      {path:'studentlist', component:StudentlistComponent}
    ]
  },
  {
    path:'register', component:RegisterComponent,
    children:[
      {path:'student-register', component:StudentRegisterComponent},
      {path:'instructor-register', component:InstructorRegisterComponent},
      {path:'student-login', component:StudentLoginComponent}
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }