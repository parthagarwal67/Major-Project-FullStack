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

listAccount():any
{
return this.http.get('http://localhost:4000/list-account');
}

loginAccount( d ):any
{
  return this.http.post('http://localhost:4000/login-account',d);
}

postDataWithImage( d )
 {
return this.http.post('http://localhost:4000/data-with-file',d)
 }
}
