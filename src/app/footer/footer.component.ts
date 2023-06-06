import { Component } from '@angular/core';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  isBgred = false
  emitCount(cnt:number){
    this.isBgred = cnt>=10;
  }
}
