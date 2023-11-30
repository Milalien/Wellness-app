import { Component } from '@angular/core';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrl: './frontpage.component.css'
})
export class FrontpageComponent {
  moodcolor: string;

  constructor() {
    this.moodcolor = "";
  }
}
