import { Component } from '@angular/core';

@Component({
  selector: 'ternaryOperator',
  templateUrl: './ternaryOperator.component.html',
  styles: [],
})
export class TernaryOperatorComponent {
  // Q1用
  private question1Value: boolean = true;
  // Q2用
  private question2Value: number = 100;

  result = this.question1Value = true ? true : false;
  result2 = this.question2Value < 50 ? '50未満' : '50より大きい';

}
