import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  testList: string[] = [
    '-- placeholder --',
    '-- placeholder --',
    '-- placeholder --',
    '-- placeholder --'
  ];

  public editItem(value: string, index: number) {
    this.testList[index] = value;
  }

  public restoreDefaultSettings() {
    this.testList = [
      '-- placeholder --',
      '-- placeholder --',
      '-- placeholder --',
      '-- placeholder --'
    ];
  }
}
