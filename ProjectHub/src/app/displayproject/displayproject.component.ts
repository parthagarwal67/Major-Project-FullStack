import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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

rating3: number;
public form: FormGroup;
  constructor(private ds:DataService,private router:Router,private fb: FormBuilder) {
    this.rating3 = 0;
    this.form = this.fb.group({
      rating1: ['', Validators.required],
      rating2: [4]
    });
   }

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
