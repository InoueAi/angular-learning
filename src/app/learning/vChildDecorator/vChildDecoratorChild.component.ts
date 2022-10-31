import { Component } from '@angular/core';

@Component({
  selector: 'vChildDecoratorChild',
  templateUrl: './vChildDecoratorChild.component.html',
  styles: [],
})
export class VChildDecoratorChildComponent {
  /**
   * viewChild用メソッド
   */
  public alertChild() {
    alert('子コンポーネントのメソッドです。');
  }
}
