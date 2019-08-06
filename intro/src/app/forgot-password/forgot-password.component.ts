import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotMailForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    public authService: AuthService,
    private formBuilder: FormBuilder
  ){}
    
  get formControls() { 
    return this.forgotMailForm.controls;
  }

  ngOnInit() {
    this.forgotMailForm = this.formBuilder.group({
      email: ['', Validators.required ]
    });
  }

  forgotMail() {
    this.authService.ForgotPassword(this.forgotMailForm.value.email)
    .then(() => {
      this.errorMessage ='';
      this.successMessage = 'Password reset email sent, check your inbox.';
      // this.router.navigate(['/dashboard']);
      // window.alert('Password reset email sent, check your inbox.');
    }, err => {
      console.log(err);
      this.successMessage = '';
      this.errorMessage = err.message;
    })
  }
}
