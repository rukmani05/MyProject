import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  img16:string="assets/images/img16.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
