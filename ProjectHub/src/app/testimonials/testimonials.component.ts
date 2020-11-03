import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
uname;
testimonial;
loginid;
email;
formdata;
myForm:FormGroup;
submitted = false;
  constructor(private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.loginid=localStorage.getItem('loginid');
    this.email=localStorage.getItem('email');
    // alert(this.loginid)
    this.myForm=this.fb.group({
      uname:['',Validators.required],
      testimonial:['',[Validators.required,Validators.minLength(80),Validators.maxLength(200)]]
    });
  }

  get f() {
    return this.myForm.controls;
  }

submit()
{
  this.submitted = true;
  if (this.myForm.invalid) 
  {
    return;
  }
  this.formdata=this.myForm.value;
  this.ds.postTestimonial({loginid:this.loginid,email:this.email,uname:this.formdata.uname,testimonial:this.formdata.testimonial}).subscribe((d)=>{
    if(d.status=='ok')
    {
      alert("Thank you For Your Feedback");
      location.reload();
    }
    else
    {
      alert("Please Try Again!!")
      location.reload();
    }
  })
 
}
}
