import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {
    this.currentSlide = 0;
  }

  nextSlide() {
    this.currentSlide++;
    if (this.currentSlide == 7) {
      this.currentSlide = 1;
    }
    if (this.currentSlide % 2 == 0) {
      this.router.navigateByUrl('question-pending');
    }
    else {
      this.router.navigateByUrl('question');
    }
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }
}
