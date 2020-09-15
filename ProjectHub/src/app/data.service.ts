import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

 
createAccount( d ):any
{
 //return this.http.get('http://localhost:3000/create-user?username='+d.username+"&password="+d.password);
// alert(JSON.stringify(d))
 return this.http.post('http://localhost:4000/create-account',d);
}

getprojects(  ):any
{
return this.http.get('http://localhost:4000/get-projects');
}
searchprojects( d ):any
{
  return this.http.post('http://localhost:4000/get-searched-projects',d);
}
deleteproject( d ):any
{
  return this.http.post('http://localhost:4000/delete-project',d);
}
updateData( d ):any
{
  return this.http.post('http://localhost:4000/update-projects-data',d);
}

getprofile(  ):any
{
return this.http.get('http://localhost:4000/get-profile');
}

listAccount():any
{
  return this.http.get('http://localhost:4000/list-accounts');
}

loginAccount( d ):any
{
  return this.http.post('http://localhost:4000/login-account',d);
}

postDataWithImage( d ):any
 {
return this.http.post('http://localhost:4000/data-with-file',d)
 }
projectFiles( d ):any
{
  return this.http.post('http://localhost:4000/project-file',d)
}

 postDataWithProfile( d ):any
 {
return this.http.post('http://localhost:4000/data-with-profile',d)
 }

projectRating( d ):any
{
  return this.http.post('http://localhost:4000/project-rating',d);
}
projectComments( d ):any
{
  return this.http.post('http://localhost:4000/project-comments',d);
}
forgotpassword( d ):any
{
  return this.http.post('http://localhost:4000/forgot-password',d);
}
profiledata( d ):any
{
  return this.http.post('http://localhost:4000/profile-data',d);
}
}
