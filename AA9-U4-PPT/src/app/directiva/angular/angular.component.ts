import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent {
  public inputCheckBox: boolean;

  constructor() {this.inputCheckBox = false; }

}
