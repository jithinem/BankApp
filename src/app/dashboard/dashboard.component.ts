import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user:any;
  sdate:any;
  constructor(private ds:DataService, private fb:FormBuilder, private router:Router, private http:HttpClient){
    // this.user=this.ds.currentUser;
    if(localStorage.getItem('currentUser')){
      this.user=JSON.parse(localStorage.getItem('currentUser')||'')
      this.sdate=Date();
      // console.log(localStorage);  
    }
    
  }
  ngOnInit(): void {
    if(!localStorage.getItem('currentAcno')){
      alert('please login first')
      this.router.navigateByUrl('')
    }
  }
  depositForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })
  withdrawForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })



  acno:any;
  pswd:any;
  amount:any;
  acno1:any;
  pswd1:any;
  amount1:any;
  deposit(){
    // alert('Deposit successful');
    var acno=this.depositForm.value.acno;
    var password=this.depositForm.value.pswd;
    var amount=this.depositForm.value.amount;
    if(this.depositForm.valid){
      this.ds.deposit(acno,password,amount).subscribe(
        (result:any)=>{
          alert(result.message)
        },
        result=>{
          alert(result.error.message)
        }
      )
    }

    // const result=this.ds.deposit(acno,pswd,amount);
    // if(result){
    //   alert(`${amount} is credited to ${acno} and balance is ${result}`)
    // }
  }
  withdraw(){
    // alert('Withdrawal successful');
    var acno=this.withdrawForm.value.acno;
    var password=this.withdrawForm.value.pswd;
    var amount=this.withdrawForm.value.amount;
    if(this.withdrawForm.valid){
      this.ds.withdraw(acno,password,amount).subscribe(
        (result:any)=>{
          alert(result.message)
        },
        result=>{
          alert(result.error.message)
        }
      )
    }
    // const result=this.ds.withdraw(acno,pswd,amount);
    // if(result){
    //   alert(`${amount} is debited from ${acno} and balance is ${result}`)
    // }
  }
  logout(){
    // alert('logout successful');
    localStorage.removeItem('currentAcno');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('Token');            //to remove token
    this.router.navigateByUrl('');
  }
  delete(){
    // alert('delete');
    this.acno=JSON.parse(localStorage.getItem('currentAcno')||'')
  }

  onCancel(){
    this.acno="";
  } 
  onDelete(event:any){
    // alert('event')
    this.ds.deleteAcc(event).subscribe(
      (result:any)=>{
        alert(result.message)
        this.router.navigateByUrl('')
      },
      result=>{
        alert(result.error.message)
      }
    )
  } 


}
