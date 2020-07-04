import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-displayproject',
  templateUrl: './displayproject.component.html',
  styleUrls: ['./displayproject.component.css']
})
export class DisplayprojectComponent implements OnInit {
projects;
prodetail;
ssarr=new Array();
  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
    this.ds.getprojects().subscribe((d)=>{
      this.projects=d.resultData;
  })
}
  goBack() {
    window.history.go(-1);
  }

  details(d)
  {
this.prodetail=d;
for(var i=1;i<=this.prodetail.screenshotsctr;i++)
{
  this.ssarr.push(i);
}
  }
}
