import { Component } from '@angular/core';

@Component({
  selector: 'inOutDecorator',
  templateUrl: './inOutDecorator.component.html',
  styles: [],
})
export class InOutDecoratorComponent {
  /**
   * outputにて送信された文言をalertで表示する。
   */
  public outputAlert($event) {
    alert($event);
  }
}
