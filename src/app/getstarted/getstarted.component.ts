import { Component, OnInit } from '@angular/core';

enum Age {
  unselected = 0,
  low,
  mid,
  high
}

enum Gender {
  unselected = 0,
  male,
  female
}

@Component({
  selector: 'app-getstarted',
  templateUrl: './getstarted.component.html',
  styleUrls: ['./getstarted.component.css']
})
export class GetstartedComponent implements OnInit {
  selectedAge = Age.unselected;
  selectedGender = Gender.unselected;

  constructor() { }

  ngOnInit() {
  }

  selectAge(age: Age) {
    if (this.selectedAge === age) {
      this.selectedAge = Age.unselected;
    } else {
      this.selectedAge = age;
    }
  }

  selectGender(gender: Gender) {
    if (this.selectedGender === gender) {
      this.selectedGender = Gender.unselected;
    } else {
      this.selectedGender = gender;
    }
  }

  onSubmit() {
    console.log('Age: ' + this.selectedAge);
    console.log('Gender: ' + this.selectedGender);
  }
}
