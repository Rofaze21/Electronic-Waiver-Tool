import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adult-screen',
  templateUrl: './adult-screen.page.html',
  styleUrls: ['./adult-screen.page.scss'],
})
export class AdultScreenPage implements OnInit {
  feildIsDisabled = false
  constructor() { }

  ngOnInit() {
  }
  Save(){
    this.feildIsDisabled = true

  }
  Edit() {
    this.feildIsDisabled = false

  }
}
