import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() curuser;
  // name;
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.queryParamMap.subscribe((d)=>{this.name=d.get('account');})
  }

  logout()
  {
  localStorage.removeItem('account');
  this.router.navigate(['/']);
  }
}