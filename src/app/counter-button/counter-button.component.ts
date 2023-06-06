import { Component,Input } from '@angular/core';
import { CounterService
 } from '../counter.service';
@Component({
  selector: 'app-counter-button',
  template: `<button (click)="increment()"> Clicked {{count}} times</button>`,
  styleUrls: ['./counter-button.component.scss']
})
export class CounterButtonComponent {
  @Input() parentId!: string;
  count: number;
  constructor(private counterService:CounterService){
    this.count = this.counterService.getCount(this.parentId);
  }
  
  increment(){
    this.counterService.incrementCount(this.parentId);
    this.count = this.counterService.getCount(this.parentId);
  }
}
