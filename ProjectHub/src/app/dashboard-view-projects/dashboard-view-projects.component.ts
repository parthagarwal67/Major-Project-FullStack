import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';
declare var document;
declare var $;
@Component({
  selector: 'app-dashboard-view-projects',
  templateUrl: './dashboard-view-projects.component.html',
  styleUrls: ['./dashboard-view-projects.component.css']
})
export class DashboardViewProjectsComponent implements OnInit {
@ViewChild('close') ccp;
  projects;
  projects1;
  prodetail;
  ssarr;
  mail;
  comments;
  cts;
  userInputRatting;
  loginid;
  gender;
  len=0;
  clen=0;
  
  
  avgrating;
  rating3: number;
  public form: FormGroup;
    constructor(private ds:DataService,private router:Router,private fb: FormBuilder,private route:ActivatedRoute) {
      // this.rating3 = 0;
      this.form = this.fb.group({
        rating1: ['', Validators.required],
        // rating2: [4]
      });
     }
  
    ngOnInit(): void {

      this.loginid=localStorage.getItem('loginid');
      this.gender=localStorage.getItem('gen');

      this.ds.getprojects().subscribe((d)=>{
        this.projects=d.resultData;
      this.projects1=this.projects.filter((d)=>{
        return d.loginid==this.loginid;
      })  
    })

  }
  
  projectrating(rat,a)
  {
  // if(this.loginid!=null)
  // {
    this.userInputRatting=rat;
  // alert(rat);
  // alert(a)
  this.mail=localStorage.getItem("email")
  // alert(this.mail)
  this.ds.projectRating({_id:a,email:this.mail,ratings:rat}).subscribe((d)=>{
    if(d.status=="ok")
    {
      alert("Ratings Submitted Successfully")
      this.ds.getprojects().subscribe((d)=>{
        this.projects=d.resultData;
        var tmp=this.projects.filter((d)=>{
          return d._id==this.prodetail._id;
        })
        this.prodetail=tmp[0];
  if(this.prodetail.ratings.length>0){
        var temp=this.prodetail.ratings.reduce((a,b)=>{
          return {ratings:a.ratings+b.ratings};
        })
        this.len=this.prodetail.ratings.length;
        this.avgrating=temp.ratings/this.len;
      }
        this.ssarr= this.prodetail.ssext.split(',');
      })
    }
    else
    {
      alert(d.resultData)
    }
  })
  // }
  // else
  // {
  //   alert('Please Login First!!');
  //   window.location.href="http://localhost:4200/login";
  // }
  }
  
  projectcomments(b)
  {
  //   if(this.loginid!=null)
  // {
    var name=localStorage.getItem("name")
    var date=new Date();
    this.mail=localStorage.getItem("email")
    this.ds.projectComments({_id:b,loginid:this.loginid,name:name,email:this.mail,comments:this.comments,date:date}).subscribe((d)=>{
      if(d.status=="ok")
    {
      alert("Comment Posted Successfully")
      this.ds.getprojects().subscribe((d)=>{
        this.projects=d.resultData;
        var tmp=this.projects.filter((d)=>{
          return d._id==this.prodetail._id;
          
        })
        
        this.prodetail=tmp[0];
        if(this.prodetail.comments.length>0){
          this.clen=this.prodetail.comments.length;
        }
    })
  // document.getElementById('comments')=='';
  location.reload();
  
    }
    else
    {
      alert(d.resultData)
    }
    })
  // }
  // else
  // {
  //   alert('Please Login First!!');
  //   window.location.href="http://localhost:4200/login";
  // }
  // alert(JSON.stringify(this.prodetail.comments))
  // alert("Prodetail._id"+JSON.stringify(this.prodetail._id))
  }
  
  
    goBack() {
      window.history.go(-1);
    }
    update(a){
      this.router.navigate(['/dashboard/dashboardUpdateProjects'],{queryParams:{id:a}});
      this.ccp.nativeElement.click();
      // window.location.reload()
      // window.location.href='http://localhost:4200/dashboard/dashboardUpdateProjects'
    }
    delete(a){
      //alert(a)
      this.ds.deleteproject({_id:a}).subscribe((d)=>{
        if(d.status=='ok')
        alert("Project Deleted Successfully");
        else
        alert("Project Not Found")
        location.reload();
      })
    }
  
    details(d)
    {
  // alert("snajd");
  // alert(JSON.stringify(this.projects))
  
  this.prodetail=d;
  this.ssarr= this.prodetail.ssext.split(',');
  if(this.prodetail.ratings.length>0){
   var temp=this.prodetail.ratings.reduce((a,b)=>{
    return {ratings:a.ratings+b.ratings};
  })
  this.len=this.prodetail.ratings.length;
  this.avgrating=temp.ratings/this.len;
  this.clen=this.prodetail.comments.length;
  }
  // this.star.nativeElement.style.fontsize='30px';
  // alert(this.ssarr)
  // this.cts=this.projects.comments;
  // alert(this.prodetail)
  // alert(this.prodetail.screenshotsctr);
  // for(var i=1;i<=this.prodetail.screenshotsctr;i++)
  // {
  //   this.ssarr.push(i);
  // }
  // alert("after pushing"+this.ssarr);
    }
    // mkedit()
    // {
    //   document.getElementById('aa').contentEditable="true";
    // }
  
    myFunction() 
    {
      var popup = document.getElementById("myPopup");
      popup.classList.toggle("show");
    }
    scroll()
    {
      var elmnt = document.getElementById("cmts");
      elmnt.scrollIntoView();
    }
    // change()
    // { 
    //   var elem = document.getElementById("myButton1");
    //   if (elem.value=="Hide") 
    //   {
    //     elem.value = "View";
    //   }
    //   else 
    //   {
    //     elem.value = "Hide";
    //   }
      
    //     var x = document.getElementById("mydiv");
    //     if (x.style.display === "none") 
    //     {
    //       x.style.display = "block";
    //     } else {
    //       x.style.display = "none";
    //     }
    // }
  
    ngAfterViewInit()
    {
      $(':radio').change(function() {
        console.log('New star rating: ' + this.value);
      });
   

   $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
  });

  
    //   $('a[href^="#"]').on('click', function(event) {
  
    //     var target = $(this.getAttribute('href'));
    
    //     if( target.length ) {
    //         event.preventDefault();
    //         $('html, body').stop().animate({
    //             scrollTop: target.offset().top
    //         }, 1000);
    //     }
    
    // });
  
  
    //   $('#link a').on("click", function () {
    //     $('body,html').animate({
    //         scrollDown: $('#cmts')
    //     }, 1000);
    //     return false;
    // });
      // this.ss.nativeElement.style.display='none';
      
      // $(document).ready(function(){
      //   $("#myButton1").click(function(){
      //     $("#mydiv").slideDown("slow");
      //   });
      //   $("#myButton1").click(function(){
      //     $("#mydiv").slideUp();
      //   });
       
      // });
  
    }
  }
