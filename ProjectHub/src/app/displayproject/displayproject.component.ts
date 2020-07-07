import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { account1 } from 'models/account1';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Key } from 'protractor';
declare var document;
declare var $;
@Component({
  selector: 'app-displayproject',
  templateUrl: './displayproject.component.html',
  styleUrls: ['./displayproject.component.css']
})
export class DisplayprojectComponent implements OnInit {
projects;
prodetail;
ssarr;
account1;

rating3: number;
public form: FormGroup;
  constructor(private ds:DataService,private router:Router,private fb: FormBuilder) {
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
}

projectrating(a)
{
alert(this.form.value.rating1)
alert(a)
// this.ds.projectRating({projectid:a,ratings:this.form.value.rating1}).subscribe((d)=>{

//   if(d.status=="ok")
//   {
//     this.ds.getprojects().subscribe((d)=>{
//       this.projects=d.resultData;
//     })
//   }
//   else if((d.status=="not found"))
//   {
//     this.ds.getprojects().subscribe((d)=>{
//       this.projects.push(d.resultData);
//     })
//   }
//   else
//   {
//     alert("Some Error Occurred")
//   }
// })
}

// getrating(element:AbstractControl):null|{[Key:string]:any}
// {
//   var val1=element.get('form.value.rating1').value;
// }

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

  myFunction() 
  {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

  ngAfterViewInit()
  {
    $(':radio').change(function() {
      console.log('New star rating: ' + this.value);
    });
  }
}
