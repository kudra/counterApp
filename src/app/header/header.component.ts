import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isBgred = false
  emitCount(cnt:number){
    this.isBgred = cnt>=10;
  }
}
