import { Component, OnInit } from '@angular/core';
declare var document:any;
declare var $:any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
clear()
{
  alert("Your Response Has Been Recorded")
  document.getElementById('qq').value="";
}
}
