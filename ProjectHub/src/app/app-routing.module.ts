import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { WebsiteComponent } from './website/website.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthguardGuard } from './authguard.guard';
import { ProfileComponent } from './profile/profile.component';
import { DisplayprojectComponent } from './displayproject/displayproject.component';
import { UploadprojectComponent } from './uploadproject/uploadproject.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardViewProjectsComponent } from './dashboard-view-projects/dashboard-view-projects.component';
import { DashboardUpdateProjectsComponent } from './dashboard-update-projects/dashboard-update-projects.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';


const routes: Routes = [
  {path:'',component:WebsiteComponent,
                                      children:[
                                           {path:'',component:HomeComponent},
                                           {path:'displayproject',component:DisplayprojectComponent},
                                           {path:'about',component:AboutComponent},
                                           {path:'contact',component:ContactComponent}
                                          ]},
  {path:'login',component:LoginComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'dashboard',component:DashboardComponent,
        children:[
          {path:'profile',component:ProfileComponent},
          {path:'uploadproject',component:UploadprojectComponent},
          {path:'dashboardViewProjects',component:DashboardViewProjectsComponent},
          {path:'dashboardUpdateProjects',component:DashboardUpdateProjectsComponent},
          {path:'testimonials',component:TestimonialsComponent}
        ]},
  {path:'profile',component:ProfileComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
