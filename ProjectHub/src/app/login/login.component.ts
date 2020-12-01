import { Component, OnInit, ViewChild } from '@angular/core';
import { account } from 'models/account';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { account1 } from 'models/account1';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var document:any;
declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
@ViewChild('overlay') sgnp;
record=new account();
createaccountForm:FormGroup;
submitted = false;
accountdata =new account1();
  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.createaccountForm = this.fb.group({
      name:['',[Validators.required,Validators.maxLength(24)]],
      email:['',[Validators.required,Validators.email]],
      pass:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*'),Validators.minLength(8)]]
   })
  }

  get f() {
    return this.createaccountForm.controls;
  }

  createAccount()
  {
    //alert(this.record.email);

// var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// if(document.getElementById('em').value.match(mailformat))
// {
  this.submitted = true;
  if (this.createaccountForm.invalid) 
  {
    // alert("invalid")
    return;
  }

  this.record = this.createaccountForm.value;  
  this.ds.createAccount(this.record).subscribe((d)=>{
    if(d.Status=="ok")
    {
      // this.ds.listAccount().subscribe((d)=>{
        // alert(JSON.stringify(d))
        // this.accountList=d.resultData;
        // alert("jfjg")
        alert("Account Created Successfully");
        // location.reload();
        // window.location.href="http://localhost:4200/login";
        console.log(this.sgnp);
        document.getElementById('na').value='';
        document.getElementById('em').value='';
        document.getElementById('pa').value='';
        this.sgnp.nativeElement.click();
        // this.sgnp.nativeElement.style.backgroundColor='black';
//          this.router.navigate(['/login'])
      // })      
    }
    else
    //  if(d.status="failed")
    {
      alert(d.resultData);
      document.getElementById('na').value='';
      document.getElementById('em').value='';
      document.getElementById('pa').value='';
      this.sgnp.nativeElement.click();
    }
  })

// }
// else
// {
// alert("You have entered an invalid email address!");
// }
  }


login()
{
  this.ds.loginAccount(this.accountdata).subscribe((d)=>{
    // alert(JSON.stringify(d));
    if(d.Status=="ok")
    {
      // alert("Login Successful");
      console.log(d.resultData);
      localStorage.setItem("name",d.resultData);
      localStorage.setItem("email",d.resultMail);
      localStorage.setItem('gen',d.resultGender);
      localStorage.setItem("loginid",d.loginid);
      localStorage.setItem("fname",d.resultFname);
      this.router.navigate(['/'],{queryParams:{account:d.resultData}});
    }
    else{
      alert("Invalid Account Entry.. Try Again!!");
      location.reload();
      
    }
  })
}


  ngAfterViewInit()
  {
      const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });
    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });
  }

}
