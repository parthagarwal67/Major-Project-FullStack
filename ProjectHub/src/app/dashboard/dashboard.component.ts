import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
declare var document:any;
declare var $:any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
@ViewChild('mm') ggp;
title;
desc;
tech;
key;
zipfile;
ppt;
doc;
screenshots:Array<File>;
  constructor(private ds:DataService) { }

  ngOnInit(): void {
  }

  getZipfile(e)
  {
    this.zipfile=e.target.files[0];
  }
  getPpt(e)
  {
    this.ppt=e.target.files[0];
  }
  getDoc(e)
  {
    this.doc=e.target.files[0];
  }
  getScreenshots(e)
  {
    this.screenshots=e.target.files;
  }

postData()
{
  var form= new FormData();
  form.set('title',this.title);
  form.set('desc',this.desc);
  form.set('tech',this.tech);
  form.set('key',this.key);
  for(var i=0;i<this.screenshots.length;i++)
  {
    form.append("screenshots",this.screenshots[i],this.screenshots[i]['title']);
  }
  
  form.set('zipfile',this.zipfile);
  form.set('ppt',this.ppt);
  form.set('doc',this.doc);

  this.ds.postDataWithImage(form).subscribe((d)=>{alert(JSON.stringify(d))});
}

  ngAfterViewInit()
{
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });

  $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
  });
}



myFunction()
{
  this.ggp.nativeElement.style.Color="yellow";
}
}
