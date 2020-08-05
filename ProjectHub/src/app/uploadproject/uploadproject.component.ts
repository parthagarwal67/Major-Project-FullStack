import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
declare var document:any;
declare var $:any;
@Component({
  selector: 'app-uploadproject',
  templateUrl: './uploadproject.component.html',
  styleUrls: ['./uploadproject.component.css']
})
export class UploadprojectComponent implements OnInit {
  title;
  desc;
  tech;
  key;
  zipfile;
  ppt;
  report;
  screenshots;
  screenshotsctr;
  setupproject;
  covervideo;
  zipext;
  pptext;
  reportext;
  ssext;
  setproext;
  coverext;
  ratings=new Array();
  comments=new Array();
  loginid;
  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
    this.loginid=localStorage.getItem('loginid');
  }

  getZipfile(e)
  {
    this.zipfile=e.target.files[0];
    this.zipext=this.zipfile.name.split('.').pop();
  }
  getPpt(e)
  {
    this.ppt=e.target.files[0];
    this.pptext=this.ppt.name.split('.').pop();
  }
  getReport(e)
  {
    this.report=e.target.files[0];
    this.reportext=this.report.name.split('.').pop();
  }
  getScreenshots(e)
  {
    this.screenshots=e.target.files;
    this.ssext = new Array();
    for (var i=0; i<this.screenshots.length;i++)
    {
      this.ssext.push(this.screenshots[i].name.split('.').pop());
    }
    // this.screenshotsctr=this.screenshots.length;
  }
  getSetupproject(e)
  {
    this.setupproject=e.target.files[0];
    this.setproext=this.setupproject.name.split('.').pop();
  }
  getCovervideo(e)
  {
    this.covervideo=e.target.files[0];
    this.coverext=this.covervideo.name.split('.').pop();
  }

postData()
{
//  if(this.loginid!=null) 
//  {
  var technologies=this.tech.split(',').map((d)=>{
    return d.trim();
  })
  var keyword=this.key.split(',').map((d)=>{
    return d.trim();
  })
  // console.log(technologies);
  // console.log(keyword);
  var form= new FormData();
  form.set('loginid',this.loginid);
  form.set('title',this.title);
  form.set('desc',this.desc);
  form.set('tech',technologies);
  form.set('key',keyword);
  form.set('zipext',this.zipext);
  form.set('pptext',this.pptext);
  form.set('reportext',this.reportext);
  form.set('ssext',this.ssext);
  // for(var i=0;i<this.screenshots.length;i++)
  // {
  //   form.append("ssext",this.ssext[i],this.screenshots[i]['title']);
  // }
  form.set('setproext',this.setproext);
  form.set('coverext',this.coverext);
  // form.set('ratings',this.ratings.toString());
  // form.set('comments',this.comments.toString());
  // form.set('screenshotsctr',this.screenshotsctr);
  for(var i=0;i<this.screenshots.length;i++)
  {
    form.append("screenshots",this.screenshots[i],this.screenshots[i]['title']);
  }
  
  form.set('zipfile',this.zipfile);
  form.set('ppt',this.ppt);
  form.set('report',this.report);
  form.set('setupproject',this.setupproject);
  form.set('covervideo',this.covervideo);


  this.ds.postDataWithImage(form).subscribe((d)=>{
   alert(JSON.stringify(d))
    location.reload();
  });
// }
// else
// {
//   alert('Please Login First');
//   window.location.href="http://localhost:4200/login";
// } 
}

ngAfterViewInit()
{
   $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
  });
}
}
