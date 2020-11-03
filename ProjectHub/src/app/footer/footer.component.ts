import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
declare var document:any;
declare var $:any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
email;
submitted=false;
usersubsForm:FormGroup;
  constructor(private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.usersubsForm = this.fb.group({
      email:['',[Validators.required,Validators.email]]
   })
  }

  get f() {
    return this.usersubsForm.controls;
  }
clear()
{
  // alert(this.email);
  this.submitted = true;
  if (this.usersubsForm.invalid) 
    {
      return;
    }
  this.email = this.usersubsForm.value;
  this.ds.usersubscription(this.email).subscribe((d)=>{
    if(d.status=='ok')
    {
      alert("Your Response Has Been Recorded");
    }
    else
    {
      alert("Email Not Found");
    }
  })
  document.getElementById('qq').value="";
}
}
