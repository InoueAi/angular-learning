import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'inOutDecoratorChild',
  templateUrl: './inOutDecoratorChild.component.html',
  styles: [],
})
export class InOutDecoratorChildComponent {
  /**
   * Q2回答用ボタンクリックメソッド
   */
  public onSendText(): void {}
}
