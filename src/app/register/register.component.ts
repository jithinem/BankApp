import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit  {
  constructor( private ds:DataService, private router:Router, private fb:FormBuilder){}
  ngOnInit(): void {
  }
  registerForm=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })
  acno:any;
  pswd:any;
  uname:any;
  // userDetails:any={
  //   1000:{acno:1000,username:"Amal",password:1000,balance:2000},
  //   1001:{acno:1001,username:"Arun",password:1001,balance:2000},
  //   1002:{acno:1002,username:"Akshay",password:1002,balance:2000}
  // }

  register(){
    var acno=this.registerForm.value.acno;
    var pswd=this.registerForm.value.pswd;
    var uname=this.registerForm.value.uname;
    // var userDetails=this.ds.userDetails;
    if(this.registerForm.valid){
      const result=this.ds.register(acno,uname,pswd).subscribe(
        (result:any)=>{
          alert(result.message)
          this.router.navigateByUrl('')
        },
        result=>{
          alert(result.error.message)
        }
      )
      // if(result){
      //   alert('Registered successfully')
      //   this.router.navigateByUrl('')
      // }
      // else{
      //   alert("register failed")
      //   console.log(this.registerForm.get('uname')?.errors);
      // }
    }
    // if(acno in userDetails){
    //   alert('User details already registered');
    // }  
    // else{
    //   alert('Registered successfully');
    // }
  }
  
}
