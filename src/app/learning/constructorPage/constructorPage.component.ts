import { Component } from '@angular/core';

@Component({
  selector: 'constructorPage',
  templateUrl: './constructorPage.component.html',
  styles: [],
})
export class ConstructorPageComponent {
  public dispString: string = '初期表示';

  constructor() {
    this.dispString = 'constructorにて書き換え済';
  }
}
