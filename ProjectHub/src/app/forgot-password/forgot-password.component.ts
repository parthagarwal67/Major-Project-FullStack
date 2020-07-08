import { Component, OnInit, ElementRef } from '@angular/core';
import { account1 } from 'models/account1';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
declare var document;
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  login:account1;
  forgotpassForm:FormGroup;
  submitted = false;
  constructor(private ds:DataService, private fb:FormBuilder,private router:Router) { }
  // ,private elementRef: ElementRef
  
  ngOnInit(): void {
    this.forgotpassForm = this.fb.group({
      email:['',[Validators.required,Validators.email]]
   })
  }

  get f() {
    return this.forgotpassForm.controls;
  }
  onsubmit()
  {
    // this.router.navigate(['/forgot-password'])
    this.submitted = true;
    if (this.forgotpassForm.invalid) 
    {
      return;
    }
    this.login = this.forgotpassForm.value;
    this.ds.forgotpassword(this.login).subscribe((d)=>{
      if(d.Status=="ok")
      {
        // alert(JSON.stringify(d.resultData));
        alert("Password Sent on your Mail");
      }
      else
      {
        alert("Email Not Registered !!")
      }
    })
    document.getElementById('inputEmail').value='';
  }

 goback()
 {
   window.history.go(-1);
 }
//  ngAfterViewInit(){
//   this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'darkcyan';
// }
}
