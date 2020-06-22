import { Component, OnInit } from '@angular/core';
import { account } from 'models/account';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { account1 } from 'models/account1';
declare var document:any;
declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
record=new account();
accountList;
accountdata =new account1();
  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
    this.ds.listAccount().subscribe((d)=>{
      this.accountList=d.resultData;
    })
  }


  createAccount()
  {
    this.ds.createAccount(this.record).subscribe((d)=>{
      if(d.status="ok")
      {
        this.ds.listAccount().subscribe((d)=>{
          // alert(JSON.stringify(d))
          this.accountList=d.resultData;
          alert("Account Created Successfully");
          location.reload();
//          this.router.navigate(['/login'])
        })      
      }
      else if(d.status="failed")
      {
        alert(d.resultData)
      }
    })
  }


login()
{
  this.ds.loginAccount(this.accountdata).subscribe((d)=>{
    if(d.Status="ok")
    {
      alert("Login Successful");
      console.log(d.resultData);
      localStorage.setItem("name",d.resultData);
      this.router.navigate([''],{queryParams:{account:d.resultData}});
    }
    else{
      alert("Invalid Account.. Try Again!!");
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
