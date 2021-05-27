import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from "src/app/services/auth.service";
declare const toggleSidebar:any;

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent implements OnInit {
 
  img4:string="assets/images/img4.jpg";
  img6:string="assets/images/img6.jpg";
  img2:string="assets/images/img2.jpg";
  img3:string="assets/images/img3.jpg";
  isUserlogged = false;
  isAdminlogged=false;


  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.isUserLoggedIn$.subscribe((isLoggedIn) => {
      this.isUserlogged = isLoggedIn;
      
    });
this.authService.isAdminLoggedIn$.subscribe((isUser)=>{
  this.isAdminlogged=isUser;
});

   
  }



  logout(): void {
     localStorage.removeItem("token");
    this.authService.isUserLoggedIn$.next(false);
    this.router.navigate(["logout"]);
  }
 
  
}
function btn() {
  throw new Error("Function not implemented.");
}

