import { Component } from '@angular/core';

@Component({
  selector: 'lifecycle',
  templateUrl: './lifecycle.component.html',
  styles: [],
})
export class LifecycleComponent {
  public data: string[] = [];

  ngOnChanges() {
    this.data.push('ngOnChanges');
  }

  ngOnInit() {
    this.data.push('ngOnInit');
  }

  ngDoCheck() {
    this.data.push('ngDoCheck');
  }

  ngAfterContentInit() {
    this.data.push('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.data.push('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    this.data.push('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    this.data.push('ngAfterViewChecked');
  }

  ngOnDestroy() {
    this.data.push('ngOnDestroy');
  }
}
