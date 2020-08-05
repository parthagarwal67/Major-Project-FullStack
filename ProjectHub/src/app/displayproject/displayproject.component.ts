import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { account1 } from 'models/account1';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Key } from 'protractor';
import { account } from 'models/account';
// import { angular } from '@angular/core/src/r3_symbols';
declare var document;
declare var $;
@Component({
  selector: 'app-displayproject',
  templateUrl: './displayproject.component.html',
  styleUrls: ['./displayproject.component.css']
})
export class DisplayprojectComponent implements OnInit {
// @ViewChild('mydiv') ss;
projects;
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
searchprojects; //value is undefined
keyword;


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
  // alert(this.searchprojects)

  

  this.route.queryParamMap.subscribe((d)=>{
    var keyword=d.get('searchedpro');
  //  alert(keyword);
   if(keyword!=null)
   {
    this.ds.searchprojects({key:keyword}).subscribe((d)=>{
      // this.searchedpro=d.resultData;
     this.projects=d.resultData;

    //  alert(JSON.stringify(this.searchprojects))
    })
  }
  else
  {
    this.ds.getprojects().subscribe((d)=>{
      this.projects=d.resultData;
      // alert(this.gender)
  })
  }
  })
  // alert(this.searchprojects)   //value is null
}

projectrating(rat,a)
{
if(this.loginid!=null)
{
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
}
else
{
  alert('Please Login First!!');
  window.location.href="http://localhost:4200/login";
}
}

projectcomments(b)
{
  if(this.loginid!=null)
{
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
}
else
{
  alert('Please Login First!!');
  window.location.href="http://localhost:4200/login";
}
}


  goBack() {
    window.history.go(-1);
  }
  show(){
    document.getElementById('search').value='';
    this.ds.getprojects().subscribe((d)=>{
      this.projects=d.resultData;
      // alert(this.gender)
  })
  }
  search(){
    // document.getElementById('search').value='';
    if(this.keyword!=null)
    {
     this.ds.searchprojects({key:this.keyword}).subscribe((d)=>{
       // this.searchedpro=d.resultData;
      this.projects=d.resultData;
 
     //  alert(JSON.stringify(this.searchprojects))
     })
   }
   else
   {
     this.ds.getprojects().subscribe((d)=>{
       this.projects=d.resultData;
       // alert(this.gender)
   })
   }
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

    $(document).load().scrollTop(0);
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
