import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isAuthenticated = false;
  img4:string="assets/images/img4.jpg";
  img6:string="assets/images/img6.jpg";
  img2:string="assets/images/img2.jpg";
  img3:string="assets/images/img3.jpg";
  constructor() { }

  ngOnInit(): void {
  }
}
