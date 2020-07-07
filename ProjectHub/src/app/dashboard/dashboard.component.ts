import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { data } from 'models/data';
declare var document:any;
declare var $:any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
@ViewChild('mm') ggp;
// title;
// desc;
// tech;
// key;
// zipfile;
// ppt;
// report;
// screenshots;
// setupproject;
// covervideo;
// zipext;
// pptext;
// reportext;
// ssext;
// setproext;
// coverext;


  constructor(private ds:DataService,private router:Router) {}
  

  ngOnInit(): void {
   
  }


 
 
  
//   getZipfile(e)
//   {
//     this.zipfile=e.target.files[0];
//     this.zipext=this.zipfile.name.split('.').pop();
//   }
//   getPpt(e)
//   {
//     this.ppt=e.target.files[0];
//     this.pptext=this.ppt.name.split('.').pop();
//   }
//   getReport(e)
//   {
//     this.report=e.target.files[0];
//     this.reportext=this.report.name.split('.').pop();
//   }
//   getScreenshots(e)
//   {
//     this.screenshots=e.target.files;
//     this.ssext=this.screenshots[0].name.split('.').pop();
//   }
//   getSetupproject(e)
//   {
//     this.setupproject=e.target.files[0];
//     this.setproext=this.setupproject.name.split('.').pop();
//   }
//   getCovervideo(e)
//   {
//     this.covervideo=e.target.files[0];
//     this.coverext=this.covervideo.name.split('.').pop();
//   }

// postData()
// {
//   var technologies=this.tech.split(',').map((d)=>{
//     return d.trim();
//   })
//   var keyword=this.key.split(',').map((d)=>{
//     return d.trim();
//   })
  // console.log(technologies);
  // console.log(keyword);
//   var form= new FormData();
//   form.set('title',this.title);
//   form.set('desc',this.desc);
//   form.set('tech',technologies);
//   form.set('key',keyword);
//   form.set('zipext',this.zipext);
//   form.set('pptext',this.pptext);
//   form.set('reportext',this.reportext);
//   form.set('ssext',this.ssext);
//   form.set('setproext',this.setproext);
//   form.set('coverext',this.coverext);
//   for(var i=0;i<this.screenshots.length;i++)
//   {
//     form.append("screenshots",this.screenshots[i],this.screenshots[i]['title']);
//   }
  
//   form.set('zipfile',this.zipfile);
//   form.set('ppt',this.ppt);
//   form.set('report',this.report);
//   form.set('setupproject',this.setupproject);
//   form.set('covervideo',this.covervideo);

//   this.ds.postDataWithImage(form).subscribe((d)=>{
//    alert(JSON.stringify(d))
//     location.reload();
//   });
// }

search()
{
  this.router.navigate(['/displayproject']);
}

goto()
{
  this.router.navigate(['/displayproject']);
}

  ngAfterViewInit()
{
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });

  // $(document).ready(function(){
  //   $('[data-toggle="tooltip"]').tooltip();   
  // });
}



myFunction()
{
  this.ggp.nativeElement.style.Color="yellow";
}
}
