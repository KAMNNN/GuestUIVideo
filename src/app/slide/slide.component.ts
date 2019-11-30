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

  question1 = "In what country is Normandy located?";
  selections1 = [
    {name: 'China'},
    {name: 'United Kingdom'},
    {name: 'France'},
    {name: 'Germany'}
  ];

  question2 = "When were the Normans in Normandy?";
  selections2 = [
    {name: '10th and 11th centuries'},
    {name: '8th century'},
    {name: '13th and 14th centuries'},
    {name: '15th century'}
  ];

  question3 = "From which countries did the Norse originate?";
  selections3 = [
    {name: 'France'},
    {name: 'Germany'},
    {name: 'Italy'},
    {name: 'Denmark'}
  ];

  constructor(private wizard: WizardService) {}

  getCurrentSlide() {
    return this.wizard.currentSlide;
  }

  getQuestion() {
    switch (this.getCurrentSlide()) {
      case 1:
        return this.question1;
      case 3:
        return this.question2;
      case 5:
        return this.question3;
    }
  }

  getSelections() {
    switch (this.getCurrentSlide()) {
      case 1:
        return this.selections1;
      case 3:
        return this.selections2;
      case 5:
        return this.selections3;
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
