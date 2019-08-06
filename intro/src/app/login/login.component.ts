import { Component } from '@angular/core';
import { AuthService } from '../Services/auth/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    public authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  get formControls() { 
    return this.loginForm.controls;
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required ],
      password: ['',Validators.required]
    });
  }

  login() {
    this.errorMessage = '';
    this.authService.doLogin(this.loginForm.value)
    .then(res => {
      this.router.navigate(['/dashboard']);
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
    })
  }
}