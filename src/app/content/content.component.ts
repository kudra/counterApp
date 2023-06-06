import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styles:[`
    .inner_section{
      display:flex;
      width:240px;
      align-items:center;
      justify-content:center;
      height:150px;
      margin-top:15vh;
      border: 3px solid #1560BD;
    }
  `]
})
export class ContentComponent {
  isBgred = false
  emitCount(cnt:number){
    this.isBgred = cnt>=10;
  }
}
