import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
declare var document:any;
declare var $:any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
@ViewChild('mm') ggp;
name;
profile;
gallery:Array<File>;
  constructor(private ds:DataService) { }

  ngOnInit(): void {
  }

  getProfile(e)
  {
    this.profile=e.target.files[0];
  }
  getGallery(e)
  {
    this.gallery=e.target.files;
  }

postData()
{
  var form= new FormData();
  form.set('name',name);
  for(var i=0;i<this.gallery.length;i++)
  {
    form.append("screenshot",this.gallery[i],this.gallery[i]['name']);
  }
  
  form.set('profile',this.profile);

  this.ds.postDataWithImage(form).subscribe((d)=>{alert(JSON.stringify(d))});
}

  ngAfterViewInit()
{
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });
}



myFunction()
{
  this.ggp.nativeElement.style.Color="yellow";
}
}
