import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { observable, Observable, Subscriber } from "rxjs";

import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
   


  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.signupForm = this.createFormGroup();
  }

  // onChange($event: Event) {
  //   const file = ($event.target as HTMLInputElement).files[0];
  //   console.log(file);
  //   this.convertToBase64(file);
  // }

  // convertToBase64(file: File) {
  //   const observable = new Observable((subscriber: Subscriber<any>) => {
  //     this.readFile(file, subscriber);
  //   });
  //   observable.subscribe((values)=>{
  //  this.signupForm.controls['img'].setValue(values);

   
  //   })
  // }

  // readFile(file: File, subscriber: Subscriber<any>) {
  //   const filereader = new FileReader();
  //   filereader.readAsDataURL(file);

  //   filereader.onload = () => {
  //     subscriber.next(filereader.result);
  //     subscriber.complete();
  //   };
  //   filereader.onerror = (error) => {
  //     subscriber.error(error);
  //     subscriber.complete();
  //   };
  // }

  createFormGroup(): FormGroup {
    return new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(2)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(7),]),
        confirm_pwd: new FormControl("", [
          Validators.required,
          Validators.minLength(7),]),
      mobile:new FormControl("",[Validators.required,Validators.minLength(10)]),
    gender:new FormControl("",[Validators.required]),
    dob:new FormControl("",[Validators.required]),
    f_name: new FormControl("", [Validators.required, Validators.minLength(2)]),
    b_group:new FormControl("",[Validators.required, Validators.minLength(2)]),
    address:new FormControl("",[Validators.required, Validators.minLength(2)]),  
img:new FormControl("",[Validators.required]),

    });
  }

 

  signup(): void {
    
    
    this.authService.signup(this.signupForm.value).subscribe((msg) => {
      console.log(this.signupForm.value);
      this.router.navigate(["login"]);
    });
  }
}
