import { Component, OnInit } from '@angular/core';
import { AnyARecord } from 'dns';
declare var $:any;
declare var document:any;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit()
{
  $(document).load().scrollTop(0);
}
}
