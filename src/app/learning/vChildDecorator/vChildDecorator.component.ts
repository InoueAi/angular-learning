import { Component, ViewChild } from '@angular/core';
import { VChildDecoratorChildComponent } from '../vChildDecorator/vChildDecoratorChild.component';

@Component({
  selector: 'vChildDecorator',
  templateUrl: './vChildDecorator.component.html',
  styles: [],
})
export class VChildDecoratorComponent {
  @ViewChild(VChildDecoratorChildComponent)
  vchild: VChildDecoratorChildComponent;

  public changeMessage: string;

  ngOnInit() {
    this.vchild = new VChildDecoratorChildComponent();
    this.changeMessage = this.vchild.messageOutput();
  }

  public clickEvent() {
    this.vchild.alertChild();
  }

  //public messageVchild(): string {
    //console.log(this.vchild);
    //return this.vchild.messageOutput();
  //}
}
