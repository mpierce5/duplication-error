import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  testList = [
    { value: '-- placeholder --' },
    { value: '-- placeholder --' },
    { value: '-- placeholder --' },
    { value: '-- placeholder --' }
  ];

  public editItem(value: string, index: number) {
    this.testList[index] = {"value": value};
  }

  public restoreDefaultSettings() {
    this.testList = [
      { value: '-- placeholder --' },
      { value: '-- placeholder --' },
      { value: '-- placeholder --' },
      { value: '-- placeholder --' }
    ];
  }
}
