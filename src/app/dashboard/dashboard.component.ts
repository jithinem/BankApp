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
    this.user=JSON.parse(localStorage.getItem('currentUser')||'')
    this.sdate=Date();
    console.log(localStorage);
    
  }
  ngOnInit(): void {
  }
  depositForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })
  withDraw=this.fb.group({
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
    var pswd=this.depositForm.value.pswd;
    var amount=this.depositForm.value.amount;
    const result=this.ds.deposit(acno,pswd,amount);
    if(result){
      alert(`${amount} is credited to ${acno} and balance is ${result}`)
    }
  }
  withdraw(){
    // alert('Withdrawal successful');
    var acno=this.depositForm.value.acno;
    var pswd=this.depositForm.value.pswd;
    var amount=this.depositForm.value.amount;
    const result=this.ds.withdraw(acno,pswd,amount);
    if(result){
      alert(`${amount} is debited from ${acno} and balance is ${result}`)
    }
  }
  logout(){
    // alert('logout successful');
    localStorage.removeItem('Currentacno');
    localStorage.removeItem('Currentuser');
    this.router.navigateByUrl('');
  }
  delete(){
    // alert('delete');
    this.acno=JSON.parse(localStorage.getItem('Currentacno')||'')
  }

  onCancel(){
    this.acno="";
  }  


}
