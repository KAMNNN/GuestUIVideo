import { Injectable } from '@angular/core';

enum Slide {
  NONE = 0,
  OCC = 1,
  BUS = 2,
  START = 3
}

enum Occupation {
  NONE = 0,
  STUDENT,
  EARLYCAREER, // Early career
  MANAGER, // Manager
  PARENT
}

enum Business {
  NONE = 0,
  NOTBUSY,
  BUSY,
  VERYBUSY
}

@Injectable({
  providedIn: 'root'
})
export class WizardService {
  public currentSlide: Slide;

  constructor() {
    this.currentSlide = 1;
  }

  nextSlide() {
    this.currentSlide++;
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }
}
