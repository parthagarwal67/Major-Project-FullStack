import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent implements OnInit {
curPath;
u;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  fun()
  {
     //alert(this.router.url)
     this.curPath=this.router.url;
     this.u=localStorage.getItem("name")
    //  if(this.curPath.includes("/"))
    //  {
    //    this.u=localStorage.getItem("account")
    //   //  alert(this.u)
    //  }
    //  else
    //  {
    //    this.u=localStorage.getItem("Login")
    //  }
  }
}
