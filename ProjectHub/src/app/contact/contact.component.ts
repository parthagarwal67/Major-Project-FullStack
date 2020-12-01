import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { DataService } from '../data.service';

declare var document;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
name;
uemail;
subject;
message;
ownemail;
  constructor(private ds:DataService) { }

  ngOnInit(): void {
    this.ownemail="agarwalparth672000@gmail.com";
    // alert(this.ownemail);
  }
  // myMap() {
  //   var mapProp= {
  //     center:new google.maps.LatLng(51.508742,-0.120850),
  //     zoom:5,
  //   };
  //   var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  //   }

  response()
  {
    if(document.getElementById('a').value=='' || document.getElementById('b').value=='' || document.getElementById('c').value=='' || document.getElementById('d').value=='')
    {
      alert("Some Fields Are Missing!!")
    }
    else
    {
    this.ds.contactQuery({name:this.name,uemail:this.uemail,subject:this.subject,message:this.message,ownemail:this.ownemail}).subscribe((d)=>{
    if(d.Status=='ok')
      {
        alert(d.resultData);
        document.getElementById('a').value='';
        document.getElementById('b').value='';
        document.getElementById('c').value='';
        document.getElementById('d').value='';
      }
  })
    }
  }
}
