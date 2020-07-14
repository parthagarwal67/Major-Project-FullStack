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
@ViewChild('mydiv') ss;
projects;
prodetail;
ssarr;
mail;
comments;
cts;


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
    this.ds.getprojects().subscribe((d)=>{
      this.projects=d.resultData;
  })
  // this.route.queryParamMap.subscribe((d)=>{this.email=d.get('dd');})
}

projectrating(a)
{
// alert(this.form.value.rating1)
// alert(a)
this.mail=localStorage.getItem("email")
// alert(this.mail)
this.ds.projectRating({_id:a,email:this.mail,ratings:this.form.value.rating1}).subscribe((d)=>{
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
      var len=this.prodetail.ratings.length;
      this.avgrating=temp.ratings/len;
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

projectcomments(b)
{
  var name=localStorage.getItem("name")
  var date=new Date();
  this.mail=localStorage.getItem("email")
  this.ds.projectComments({_id:b,name:name,email:this.mail,comments:this.comments,date:date}).subscribe((d)=>{
    if(d.status=="ok")
  {
    alert("Comment Posted Successfully")
    this.ds.getprojects().subscribe((d)=>{
      this.projects=d.resultData;
      var tmp=this.projects.filter((d)=>{
        return d._id==this.prodetail._id;
      })
      this.prodetail=tmp[0];

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


  goBack() {
    window.history.go(-1);
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
var len=this.prodetail.ratings.length;
this.avgrating=temp.ratings/len;
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
  change()
  { 
    var elem = document.getElementById("myButton1");
    if (elem.value=="Hide") 
    {
      elem.value = "View";
    }
    else 
    {
      elem.value = "Hide";
    }
    
      var x = document.getElementById("mydiv");
      if (x.style.display === "none") 
      {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
  }

  ngAfterViewInit()
  {
    $(':radio').change(function() {
      console.log('New star rating: ' + this.value);
    });
    this.ss.nativeElement.style.display='none';
    document.getElementById('star').style.fontsize='30px';

//     var app = angular.module("myApp", []);
//     app.controller("myCtrl", function($scope) {
//     $scope.myObj = {
//     // "color" : "white",
//     // "background-color" : "coral",
//     "font-size" : "30px",
//     // "padding" : "50px"
//   }
// });

  }
}
