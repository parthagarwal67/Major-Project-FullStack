import { Component, OnInit, Input, Directive, ElementRef, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// @Directive({
//     selector:'img[appImgFallback]'
// })
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() curuser;
  // @Input() appImgFallback:string;
  loginid;
  // name;
  constructor(private router:Router,private route:ActivatedRoute) { }



  ngOnInit(): void {
    // this.route.queryParamMap.subscribe((d)=>{this.name=d.get('account');})
    this.loginid=localStorage.getItem('loginid');
  }

  logout()
  {
  localStorage.removeItem('name');
  localStorage.clear();
  window.location.href="http://localhost:4200";
  }
  logout2()
  {
    localStorage.removeItem('name');
  }
}