import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
declare var document;
declare var $;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile;
  profileext;
  profiledetails;
  fname;
  lname;
  gender;
  // genderF;
  email;
  // genderFemale;
  country_code;
  phone;
  pincode;
  mail;
  loginid;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  currentdate=new Date();
  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
    this.mail=localStorage.getItem('email');
    // alert(this.mail)
    this.loginid=localStorage.getItem('loginid');
    // alert(this.loginid)
    this.ds.getprofile().subscribe((d)=>{
      this.profiledetails=d.resultData;
    var pro=  this.profiledetails.filter((d)=>{
        return d.email===this.mail;
      })
      this.fname=pro[0].fname;
      this.lname=pro[0].lname;
      this.gender=pro[0].gender;
      this.country_code=pro[0].country_code;
      this.phone=pro[0].phone;
      this.pincode=pro[0].pincode;
      // alert(JSON.stringify(pro))
    })
    
  }

  fileChangeEvent(event: any): void {
    // document.getElementById('info').style.display='block';
    this.imageChangedEvent = event;
    this.profile=event.target.files[0];
    this.profileext=this.profile.name.split('.').pop();
     
      // document.getElementById('image').style.display='none';
  }
//   getProfile(e){
//     this.profile=e.target.files[0];
//     this.profileext=this.profile.name.split('.').pop();
// }
imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
}
imageLoaded() {
    // show cropper
}
cropperReady() {
    // cropper ready
}
loadImageFailed() {
    // show message
}
myfun(a){
this.gender=a;
}

postData(){
  
  // alert(this.gender)
  // alert(this.genderF)
  
  // form.set('fname',this.fname)
  // form.set('lname',this.lname)
  // form.set('gender',this.gender)
  // form.set('email',this.mail)
  // form.set('country_code',this.country_code)
  // form.set('phone',this.phone)
  // form.set('pincode',this.pincode)
  

   this.ds.profiledata({fname:this.fname,lname:this.lname,gender:this.gender,email:this.mail,country_code:this.country_code,phone:this.phone,pincode:this.pincode}).subscribe((d)=>{
     alert("You will be logged out to apply changes");
    //  location.reload();
    this.router.navigate(['/login']) 
   })
   

   document.getElementById('a').disabled=true;
   document.getElementById('b').disabled=true;
   document.getElementById('c').disabled=true;
   document.getElementById('d').disabled=true;
   document.getElementById('country_code').disabled=true;
   document.getElementById('e').disabled=true;
   document.getElementById('f').disabled=true;
}

goBack() {
  window.history.go(-1);
}

toggle() {
    var x = document.getElementById("aa");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    var form= new FormData();
    form.set('_id',this.loginid)
    form.set('profileext',this.profileext)
    form.set('profile',this.profile)

    this.ds.postDataWithProfile(form).subscribe((d)=>{
      alert("Profile Photo Updated !!")
      this.currentdate=new Date();
      //  location.reload();
  //      alert(JSON.stringify(d.resultData))
  //      if(d.Status=='ok')
  // {     localStorage.setItem('gender',d.resultData)}
     });
  }
// rem(){
//   var Node1 = document.getElementById('img');
//   Node1.removeChild(Node1.childNodes[0]);
// }

ngAfterViewInit()
{
  $(document).ready(function() {

    
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }
    

    $(".file-upload").on('change', function(){
        readURL(this);
    });
    
    $(".upload-button").on('click', function() {
       $(".file-upload").click();
    });
});

$(".open").on("click", function() {
  $(".popup-overlay, .popup-content").addClass("active");
});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
$(".close, .popup-overlay").on("click", function() {
  $(".popup-overlay, .popup-content").removeClass("active");
});

// $(document).ready(function(){
//   $("#tub").click(function(){
//     $("#image").remove();
//     //location.reload()
//   });
// });

}
}