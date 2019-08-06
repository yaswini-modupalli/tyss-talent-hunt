import { Injectable } from "@angular/core";
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;
  isAdmin: boolean = true; //Make TRUE for requirement team access FALSE for recruiter access
  name = "Yaswini Modupalli"; 

  constructor(
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore,   // Inject Firestore service
    public router: Router
  ){
    // this.getData();
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }

  // Register 
  doRegister(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(res => {
        resolve(res);
      }, err => reject(err))
    })
  }

  // Login
  doLogin(value){
    const credentials = { email: value.email, password: value.password };
    console.log(credentials);
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
      .then(res => {
        // res.user.displayName = "";
        resolve(res);
      }, err => reject(err))
    })
  }

  // Returns true when user is looged in
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null) ? true : false;
  }

  // Reset Forgot password
  ForgotPassword(passwordResetEmail) {
    return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail);
    // .then(res => {
    //   console.log("res is " +JSON.stringify(res));
    //   // resolve(res);
    // }, err => {return err});
  }

  // Logout
  doLogout(){
    return this.afAuth.auth.signOut()
    .then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    })
  }
}