import { Component, OnInit, ViewChild } from "@angular/core";
 import { MatMenuTrigger } from "@angular/material/menu";
import { Router } from "@angular/router";
// import { LoginComponent } from "./components/login/login.component";

import { AuthService } from "src/app/services/auth.service";


@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent implements OnInit {
  // @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  // someMethod() {
  //   this.trigger.openMenu();
  // }

  img4: string = "assets/images/img4.jpg";
  img6: string = "assets/images/img6.jpg";
  img2: string = "assets/images/img2.jpg";
  img3: string = "assets/images/img3.jpg";
  profile: string;
  isUserlogged = false;
  isAdminlogged = false;
  name = '';
//   public items: { field: string }[] = [
//     { field: 'Option 1' },
//     { field: 'Option 2' },
//     { field: 'Option 3' }
// ];
  constructor(private authService: AuthService, private router: Router) { }
 
  ngOnInit(): void {


    this.authService.isUserLoggedIn$.subscribe((isLoggedIn) => {
      this.isUserlogged = isLoggedIn;

    });
    this.authService.isAdminLoggedIn$.subscribe((isUser) => {
      this.isAdminlogged = isUser;
    });

    this.name = localStorage.getItem("name");
// console.log(this.name)

  }



  logout(): void {

    this.authService.logout();
  }
Update(){
  
}

}



