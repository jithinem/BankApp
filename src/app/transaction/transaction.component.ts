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
    this.acno=this.ds.currentAcno
    this.transactions=this.ds.getTransaction(this.acno)
    console.log(this.transactions);
    
  }
  ngOnInit():void{

  }

}
