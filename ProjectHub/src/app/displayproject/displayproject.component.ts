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
ssarr;
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
this.ssarr= this.prodetail.ssext.split(',');
// alert(this.prodetail.screenshotsctr);
// for(var i=1;i<=this.prodetail.screenshotsctr;i++)
// {
//   this.ssarr.push(i);
// }
// alert("after pushing"+this.ssarr);
  }
}
