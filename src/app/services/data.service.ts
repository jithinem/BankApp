import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, ɵresetJitOptions } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';

//global Http header object creation
const options={
  headers:new HttpHeaders() //to avoid overloading
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser:any;
  currentAcno:any;
  
  constructor(private http:HttpClient) {
    // this.getDetails();
  }
  saveDetails(){
    if(this.userDetails){
      localStorage.setItem('Database',JSON.stringify(this.userDetails))
    }
    if(this.userDetails){
      localStorage.setItem('Currentuser',JSON.stringify(this.currentUser))
    }
    if(this.userDetails){
      localStorage.setItem('Currentacno',JSON.stringify(this.currentAcno))
    }
  }
  // getDetails(){
  //   if(localStorage.getItem('Database')){
  //     this.userDetails=JSON.parse(localStorage.getItem('Database')||'')
  //   }
  //   if(localStorage.getItem('Currentacno')){
  //     this.currentAcno=JSON.parse(localStorage.getItem('Currentacno')||'')
  //   }
  //   if(localStorage.getItem('Currentuser')){
  //     this.currentUser=JSON.parse(localStorage.getItem('Currentuser')||'')
  //   }
  // }
  userDetails:any={
    1000:{acno:1000,username:"Amal",password:1000,balance:2000,transaction:[]},
    1001:{acno:1001,username:"Arun",password:1001,balance:2000,transaction:[]},
    1002:{acno:1002,username:"Akshay",password:1002,balance:2000,transaction:[]}
  }
  register(acno:any,username:any,password:any){
    const body={
      acno,
      username,
      password
    }
    return this.http.post('http://localhost:3000/register',body)
    // var userDetails=this.userDetails;
    // if(acno in this.userDetails){
    //   this.saveDetails();
    //   return false;
    // }
    // else{
    //   userDetails[acno]={
    //     acno:acno,
    //     username:username,
    //     password:password,
    //     balance:0,
    //     transaction:[]
    //   }
    //   return true;
    // }    
  }

  login(acno:any,password:any){
    const body={
      acno,
      password
    }
    return this.http.post('http://localhost:3000/login',body)
    // var userDetails=this.userDetails;
    // if(acno in this.userDetails){
    //   if(pswd==this.userDetails[acno]['password']){
    //     this.currentUser=userDetails[acno]['username'];
    //     this.currentAcno=acno;
        this.saveDetails();
    //     return true;
    //   }
    //   else{
    //     alert('Invalid password');
    //     return false;
    //   }
    // }
    // else{
    //   alert('Invalid userDetails')
    //   return false;
    // }
  }

  getToken(){
    //fetch the token from local storage
    const token=JSON.parse(localStorage.getItem('Token')||'')
    //append the token inside the header after generating header
    let headers=new HttpHeaders();
    if(token){
      options.headers=headers.append('x-access-token',token)
    }
    return options;
  }

  deposit(acno:any,password:any,amt:any){
    var amount=parseInt(amt);
    const body={
      acno,
      password,
      amount
    }
    return this.http.post('http://localhost:3000/deposit',body,this.getToken())
    // let userDetails=this.userDetails;
    // if(acno in this.userDetails){
    //   if(pswd==this.userDetails[acno]['password']){
    //     userDetails[acno]['balance']+=amount;
    //     userDetails[acno]['transaction'].push({
    //       type:'Credit',
    //       amount
    //     })
    //     this.saveDetails();
    //     return userDetails[acno]['balance'];
    //   }
    //   else{
    //     alert('Invalid password')
    //     return false;
    //   }
    // }
    // else{
    //   alert('Invalid userdetails');
    //   return false;
    // }
  }

  withdraw(acno:any,password:any,amt:any){
    var amount=parseInt(amt);
    const body={
      acno,
      password,
      amount
    }
    return this.http.post('http://localhost:3000/withdraw',body,this.getToken())

    // let userDetails=this.userDetails;
    // if(acno in this.userDetails){
    //   if(pswd==this.userDetails[acno]['password']){
    //     if(userDetails[acno]['balance']>amount){
    //       userDetails[acno]['balance']-=amount;
    //       userDetails[acno]['transaction'].push({
    //         type:'Debit',
    //         amount
    //       })
    //       this.saveDetails();
    //       return userDetails[acno]['balance'];
    //     }
    //     else{
    //       alert('Insufficient balance');
    //       return false;
    //     }
    //   }
    //   else{
    //     alert('Invalid password')
    //     return false;
    //   }
    // }
    // else{
    //   alert('Invalid userdetails');
    //   return false;
    // }
  }

  getTransaction(acno:any){
    const body={
      acno
    }
    return this.http.post('http://localhost:3000/transaction',body,this.getToken())
    // return this.userDetails[acno]['transaction'];
  }

}
