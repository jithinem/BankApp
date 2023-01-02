import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  constructor(){}
  ngOnInit() : void {
  
  }
  @Input() item:string | undefined

}
