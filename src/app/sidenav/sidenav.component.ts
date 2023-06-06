import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  isBgred = false
  emitCount(cnt:number){
    this.isBgred = cnt>=10;
  }
}
