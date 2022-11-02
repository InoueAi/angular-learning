import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'inOutDecoratorChild',
  templateUrl: './inOutDecoratorChild.component.html',
  styles: [],
})
export class InOutDecoratorChildComponent {
  @Input() inputText: string = '@Inputにて表示';
  @Output() output: EventEmitter<string> = new EventEmitter();

  /**
   * Q2回答用ボタンクリックメソッド
   */
  public onSendText(): void {
    this.output.emit('出力しました!');
  }
}
