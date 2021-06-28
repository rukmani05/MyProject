import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {
  users: any;
  id;
  professions;
  activities;
  _activities;
   img:any;
  // img: string = "assets/images/comp.jpg";


  constructor(private location: Location, public dataService: DataService,private sanitizer: DomSanitizer) { }

  @ViewChild('multiUserSearch') multiUserSearchInput: ElementRef;

  ngOnInit(): void {

    this.id = localStorage.getItem('userId');
    console.log(this.id);

    this.dataService.getuser(this.id).subscribe(users => {
      console.log(users);
      this.users = users;
    //  this.img= this.users[0].image;
    // this.img = this.sanitizer.bypassSecurityTrustUrl(this.users[0].image);
    // console.log(this.img);
    });



    this.dataService.getProfession().subscribe(professions => {
      this.professions = professions;
      // console.log(professions);
    })
    this.dataService.getActivity().subscribe(activities => {
      this.activities = activities;
      this._activities = activities;
      // console.log(this.activities);
    })
  }

  onInputChange() {
    const searchInput = this.multiUserSearchInput.nativeElement.value ?
      this.multiUserSearchInput.nativeElement.value.toLowerCase() : ''
    this.activities = this._activities.filter(u => {
      const name: string = u.interest.toLowerCase();
      return name.indexOf(searchInput) > -1;
    });
  }

  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      '';
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  Update() {

    this.users[0]['id'] = Number(this.id);
    // this.users[0]['activity_id']=Number(this.users[0].activity_id);

    console.log(this.users[0].activity_id[0]);




    console.log(this.users);
    this.dataService.UserDetails_Update(this.users[0]);
  }
  goback() {
    this.location.back();
  }
 

}
