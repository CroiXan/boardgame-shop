import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.css'
})

export class RegistrationFormComponent implements OnInit {
  registrationForm!: FormGroup;
  isMatchPassword: boolean = true;
  isFormatPasswordValid: boolean = true;
  isFormatConfirmPasswordValid: boolean = true;

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6),Validators.maxLength(18)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6),Validators.maxLength(18)]),
      address: new FormControl(''),
      region: new FormControl(''),
      comuna: new FormControl(''),
      postalCode: new FormControl('')
    });
  }

  passwordMatchValidator() : void{
    this.confirmPasswordFormatValidatior();
    this.isMatchPassword = this.registrationForm.get('password')?.value === this.registrationForm.get('confirmPassword')?.value;
  }

  passwordFormatValidatior(){
    this.isFormatPasswordValid = this.validateFormat(this.registrationForm.get('password')?.value);
  }

  confirmPasswordFormatValidatior(){
    this.isFormatConfirmPasswordValid = this.validateFormat(this.registrationForm.get('confirmPassword')?.value);
  }

  validateFormat(text: string): boolean {
    const regex = /^(?=.*[a-z])(?=.*[A-Z]).*$/;
    return regex.test(text);
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      alert('Formulario enviado');
      console.log(this.registrationForm.value);
    } else {
      
    }
  }

  cleanForm(){
    this.isMatchPassword = true;
    this.registrationForm.reset();
  }

  get formControls() { return this.registrationForm.controls; }
}
