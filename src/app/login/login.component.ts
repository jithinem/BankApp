import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor( private router:Router, private ds:DataService, private fb:FormBuilder){}
  ngOnInit(): void {
  }
  loginForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]

  })

// aim="Your perfect banking partner";
// account="Please enter your account number";
acno:any;
pswd:any;

// login(){
//   // alert('Login clicked');
//   var acno=this.acno;
//   var pswd=this.pswd;
//   var userDetails=this.userDetails;
//   if(acno in userDetails){
//     if(pswd==userDetails[acno]['password']){
//       alert('Login successful');
//     }
//     else{
//       alert('Incorrect password');
//     }
//   }
//   else{
//     alert('User not found');
//   }
// }

// login(a:any,p:any){
//   login(){
//   // var acno=a.value;
//   // var pswd=p.value;
//   var acno=this.acno;
//   var pswd=this.pswd;
//   var userDetails=this.userDetails;
//   if(acno in userDetails){
//     if(pswd==userDetails[acno]['password']){
//       alert('Login successful');
//       this.router.navigateByUrl('dashboaard')
//     }
//     else{
//       alert('Incorrect password');
//     }
//   }
//   else{
//     alert('User not found');
//   }

// }

login(){
  var acno=this.loginForm.value.acno;
  var pswd=this.loginForm.value.pswd;
  // var userDetails=this.ds.userDetails;
  if(this.loginForm.valid){
    this.ds.login(acno,pswd).subscribe(
      (result:any)=>{
        localStorage.setItem('currentUser',JSON.stringify(result.currentUser))
        localStorage.setItem('currentAcno',JSON.stringify(result.currentAcno))
        localStorage.setItem('Token',JSON.stringify(result.token))
        alert(result.message)
        this.router.navigateByUrl('dashboard')
      },
      result=>{
        alert(result.error.message)
      }
    )

  }
  // if(result){
  //   alert('Login successful');
  //   this.router.navigateByUrl('dashboard');
  // }
  // else{
  //   alert('Login failed');
  // }
}

// acnoChange(event:any){
//   console.log(event.target.value);
// }
// acnoChange(event:any){
//   this.acno=event.target.value;
//   console.log(this.acno); 
// }
// pswdChange(event:any){
//   console.log(event.target.value);
// }
// pswdChange(event:any){
//   this.pswd=event.target.value;
//   console.log(this.pswd); 
// }


  // userDetails:any={
  //   1000:{acno:1000,username:"Amal",password:1000,balance:2000},
  //   1001:{acno:1001,username:"Arun",password:1001,balance:2000},
  //   1002:{acno:1002,username:"Akshay",password:1002,balance:2000}
  // }

  
}
