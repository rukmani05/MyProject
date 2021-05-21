import { Component, OnInit } from '@angular/core';



// declare const closeNav:any;
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  
  styleUrls: ['./admin-dashboard.component.scss'],
  
})
export class AdminDashboardComponent implements OnInit {
 

  img11:string="assets/images/img11.jpg";
  img12:string="assets/images/img12.jpg";
  img13:string="assets/images/img13.jpg";
  img14:string="assets/images/img14.jpg";


  constructor() { }

  ngOnInit(): void {


// new closeNav();
  }
  
}
