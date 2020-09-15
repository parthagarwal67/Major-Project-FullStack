import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';
declare var document:any;
declare var $:any;
@Component({
  selector: 'app-dashboard-update-projects',
  templateUrl: './dashboard-update-projects.component.html',
  styleUrls: ['./dashboard-update-projects.component.css']
})
export class DashboardUpdateProjectsComponent implements OnInit {
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
  // ratings=new Array();
  // comments=new Array();
  loginid;
  proid;
  constructor(private ds:DataService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.loginid=localStorage.getItem('loginid');

    this.route.queryParamMap.subscribe((d)=>{
      this.proid=d.get('id');
// alert(proid)
// location.reload()
    this.ds.getprojects().subscribe((d)=>{
      var projectsforupdate=d.resultData;
      var temp= projectsforupdate.filter((d)=>{
        return d._id==this.proid;
      })
      this.title=temp[0].title;
      this.desc=temp[0].desc;
      this.tech=temp[0].tech;
      this.key=temp[0].key.toString();
  })
})
// alert(this.proid)
// alert(this.loginid)
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
updatedata(){
  // var technologies=this.tech.split(',').map((d)=>{
  //   return d.trim();
  // })
  // var keyword=this.key.split(',').map((d)=>{
  //   return d.trim();
  // })
  var technologies =this.tech.trim();
  var keyword =this.key.trim();
  console.log(technologies);
  console.log(keyword);
  // var form= new FormData();
  // form.set('proid',this.proid);
  // form.set('title',this.title);
  // form.set('desc',this.desc);
  // form.set('tech',technologies);
  // form.set('key',keyword);
  
this.ds.updateData({_id:this.proid,title:this.title,desc:this.desc,tech:technologies,key:keyword}).subscribe((d)=>{
    if(d.Status=="success")
    {
      alert("data updated successfully")
    this.ds.getprojects().subscribe((d)=>{
      var projectsforupdate=d.resultData;
      var temp= projectsforupdate.filter((d)=>{
        return d._id==this.proid;
      })
      this.title=temp[0].title;
      this.desc=temp[0].desc;
      this.tech=temp[0].tech;
      this.key=temp[0].key;
  })
  }
  else 
  {
    alert("some thing went wrong on server")
  }

    location.reload()
  })
}

postData()
{
  var form= new FormData();
  form.set('_id',this.proid);
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
  for(var i=0;i<this.screenshots.length;i++)
  {
    form.append("screenshots",this.screenshots[i],this.screenshots[i]['title']);
  }
  
  form.set('zipfile',this.zipfile);
  form.set('ppt',this.ppt);
  form.set('report',this.report);
  form.set('setupproject',this.setupproject);
  form.set('covervideo',this.covervideo);


  this.ds.projectFiles(form).subscribe((d)=>{
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

  $(document).load().scrollTop(0);
  // $(document).reload();
  // window.location.reload()
  // window.onload = function () {window.location.reload()}
  // response.setIntHeader("Refresh", 1);
  // setTimeout('window.location.reload()',15000);
// window.location=window.location;
// history.go(0)
// location.replace('http://localhost:4200/dashboard/dashboardUpdateProjects')
}
}
