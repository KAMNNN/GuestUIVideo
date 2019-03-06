import { Component, OnInit, Input } from '@angular/core';
import { WizardService } from '../wizard.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  constructor(private wizard: WizardService) { }

  ngOnInit() {
  }

  getCurrentSlide() {
    return this.wizard.currentSlide;
  }
}
