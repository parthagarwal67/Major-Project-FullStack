import { Component, OnInit } from '@angular/core';
declare var document;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
    alert("Query Submitted")
document.getElementById('a').value='';
document.getElementById('b').value='';
document.getElementById('c').value='';
document.getElementById('d').value='';
  }
}
