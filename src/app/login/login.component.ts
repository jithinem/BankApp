import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {
  }

aim="Your perfect banking partner";
account="Please enter your account number";
acno:any;
pswd:any;

login(){
  // alert('Login clicked');
  var acno=this.acno;
  var pswd=this.pswd;
  var userDetails=this.userDetails;
  if(acno in userDetails){
    if(pswd==userDetails[acno]['password']){
      alert('Login successful');
    }
    else{
      alert('Incorrect password');
    }
  }
  else{
    alert('User not found');
  }
}

// acnoChange(event:any){
//   console.log(event.target.value);
// }
acnoChange(event:any){
  this.acno=event.target.value;
  console.log(this.acno);
  
}
// pswdChange(event:any){
//   console.log(event.target.value);
// }
pswdChange(event:any){
  this.pswd=event.target.value;
  console.log(this.pswd);
  
}


  userDetails:any={
    1000:{acno:1000,username:"Amal",password:1000,balance:2000},
    1001:{acno:1001,username:"Arun",password:1001,balance:2000},
    1002:{acno:1002,username:"Akshay",password:1002,balance:2000}
  }

  
}
