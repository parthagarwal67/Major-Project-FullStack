import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
name;
keyword;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((d)=>{this.name=d.get('account');})
  }
search()
{
    this.router.navigate(['/displayproject']);
}
}
