import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {
  transactions:any;
  acno:any;
  constructor(private ds:DataService){
    this.acno=JSON.parse(localStorage.getItem('currentAcno')||'')
    this.ds.getTransaction(this.acno).subscribe(
      (result:any)=>{
        this.transactions=result.transaction
      },
      result=>{
        alert(result.error.message)
      }
    )
    console.log(this.transactions);
    console.log(this.acno);
    
    

    // this.acno=this.ds.currentAcno
    // this.transactions=this.ds.getTransaction(this.acno)
    // console.log(this.transactions);
    
  }
  ngOnInit():void{

  }

}
