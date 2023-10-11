import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registratoin',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  registrationForm = new FormGroup(
    {
      email: new FormControl(), 
      password: new FormControl(),
      passwordConfirmation: new FormControl()
    }
  );
}
