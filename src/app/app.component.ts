import { Component } from '@angular/core';
import { WizardService } from './wizard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private wizard: WizardService) {}

  currentSlide() {
    return this.wizard.currentSlide;
  }
}
