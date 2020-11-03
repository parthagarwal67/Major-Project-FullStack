import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ImageCropperModule } from 'ngx-image-cropper';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NgxStarRatingModule } from 'ngx-star-rating';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { WebsiteComponent } from './website/website.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { DisplayprojectComponent } from './displayproject/displayproject.component';
import { UploadprojectComponent } from './uploadproject/uploadproject.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FirstExtPipe } from './first-ext.pipe';
import { ElementFromStringPipe } from './element-from-string.pipe';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { StarComponent } from './star/star.component';
import { DashboardViewProjectsComponent } from './dashboard-view-projects/dashboard-view-projects.component';
import { ImgFallbackDirective } from './img-fallback.directive';
import { DashboardUpdateProjectsComponent } from './dashboard-update-projects/dashboard-update-projects.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    WebsiteComponent,
    DashboardComponent,
    ProfileComponent,
    DisplayprojectComponent,
    UploadprojectComponent,
    AboutComponent,
    ContactComponent,
    FirstExtPipe,
    ElementFromStringPipe,
    ForgotPasswordComponent,
    StarComponent,
    DashboardViewProjectsComponent,
    ImgFallbackDirective,
    DashboardUpdateProjectsComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // NgxStarRatingModule,
    ReactiveFormsModule,
    ImageCropperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
