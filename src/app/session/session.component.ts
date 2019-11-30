import { Component, OnInit } from '@angular/core';
import { WizardService } from '../wizard.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {

  constructor(private wizard: WizardService) { }

  ngOnInit() {
  }

  submit() {
    this.wizard.nextSlide();
  }
}
