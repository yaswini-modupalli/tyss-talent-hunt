import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  registerForm: FormGroup;
  errorMessage: string = '';

  constructor(
    public authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  get formControls() { 
    return this.registerForm.controls;
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required ],
      password: ['',Validators.required]
    });
  }

  register() {
    this.errorMessage = '';
    this.authService.doRegister(this.registerForm.value)
    .then(res => {
      this.router.navigate(['/dashboard']);
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
    })
  }
}
