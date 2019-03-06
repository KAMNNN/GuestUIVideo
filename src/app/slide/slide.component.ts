import { Component, Input } from '@angular/core';
import { WizardService } from '../wizard.service';

enum Slide {
  NONE = 0,
  OCC = 1,
  BUS = 2,
  START = 3
}

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent {
  selection = 0;

  occSelections = [
    {name: 'Student', icon: '/assets/student.png'},
    {name: 'Early Career', icon: '/assets/early_career.png'},
    {name: 'Manager', icon: '/assets/manager.png'},
    {name: 'Parent', icon: '/assets/parent.png'}
  ];

  busSelections = [
    {name: 'Somewhat', icon: '/assets/not_busy.png'},
    {name: 'Very', icon: '/assets/busy.png'},
    {name: 'No Time', icon: '/assets/very_busy.png'}
  ];

  getCurrentSlide() {
    return this.wizard.currentSlide;
  }

  constructor(private wizard: WizardService) {}
  getSelections() {
    switch (this.getCurrentSlide()) {
      case Slide.OCC:
        return this.occSelections;
      case Slide.BUS:
        return this.busSelections;
    }
  }

  select(sel: number) {
    this.selection = this.selection === sel ? 0 : sel;
  }

  getBackground(n: number) {
    return this.selection === n ? '-webkit-linear-gradient(left top, #1ea5e4, #2463cd)' : 'white';
  }

  onSubmit() {
    console.log('Selection: ' + this.selection);
    this.wizard.nextSlide();
    this.selection = 0;
  }
}
