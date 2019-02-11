import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }
  public postdata(reg){
    return this.http.post("http://localhost:3000/auth/login",reg).subscribe(data=>{
      alert("Registration succesfully");
    })
  }
  public checkdata(username,password){
    return this.http.get("http://localhost:3000/auth/login")+username+"/"+password).subscribe(data=>{
      alert("Data checked..!");
})
  }
}
