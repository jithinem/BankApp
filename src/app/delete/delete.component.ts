import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  constructor(){}
  ngOnInit() : void {
  
  }
  //To hold value from the parent
  @Input() item:string | undefined

  @Output() Oncancel= new EventEmitter;  //to generate an event  
  
  cancel(){
    this.Oncancel.emit();
  }


}
 