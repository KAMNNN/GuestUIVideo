import { Component, OnInit } from '@angular/core';
import { WizardService } from '../wizard.service';

@Component({
  selector: 'app-get-started-slide',
  templateUrl: './get-started-slide.component.html',
  styleUrls: ['./get-started-slide.component.css']
})
export class GetStartedSlideComponent implements OnInit {

  constructor(private wizard: WizardService) { }

  ngOnInit() {
  }
  
  next() {
    this.wizard.nextSlide();
  }
}
