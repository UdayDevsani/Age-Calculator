import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-age-calculator',
  templateUrl: './age-calculator.component.html',
  styleUrls: ['./age-calculator.component.css']
})
export class AgeCalculatorComponent {
  ageCalculatorForm: FormGroup;
  age: number | null;

  constructor(private fb: FormBuilder) {
    this.ageCalculatorForm = this.fb.group({
      dob: ['', Validators.required],
      cdate: ['', Validators.required],
    });

    this.age = null;
  }

  calculateAge() {
    const dob = this.ageCalculatorForm.get('dob')?.value;
    const cdate = this.ageCalculatorForm.get('cdate')?.value;

    if (dob && cdate) {
      const birthDate = new Date(dob);
      const currentDate = new Date(cdate);

      const ageDiff = currentDate.getFullYear() - birthDate.getFullYear();

      // Checks if birthday has occurred this year
      if (
        currentDate.getMonth() < birthDate.getMonth() ||
        (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())
      ) {
        this.age = ageDiff - 1;
      } else {
        this.age = ageDiff;
      }
    }
  }
}
