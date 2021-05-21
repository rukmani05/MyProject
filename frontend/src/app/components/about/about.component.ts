import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
 
  img7:string="assets/images/img7.jpg";
  img8:string="assets/images/img8.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
