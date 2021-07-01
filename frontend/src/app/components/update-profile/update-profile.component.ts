import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { VERSION } from '@angular/material/core';


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
  targets: any;
  imageUrl: any;


  //  img:any;
  // img: string = "assets/images/comp.jpg";


  constructor(private location: Location, public dataService: DataService,private sanitizer: DomSanitizer) { }

  @ViewChild('multiUserSearch') multiUserSearchInput: ElementRef;

  ngOnInit(): void {

    this.id = localStorage.getItem('userId');
    console.log(this.id);

    this.dataService.getuser(this.id).subscribe(users => {
      console.log(users);
      this.users = users;
     
    
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
  handleFileInput(file: FileList) {
   
    this.targets = file.item(0);

    
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.targets);
    console.log(this.targets);
   
    
  }
  Update() {

    this.users[0]['id'] = Number(this.id);
    console.log(this.users);
  // let target=this.targets;

  // this.users[0]['files']=target;

let formData=new FormData();
formData.append('id',this.users[0]['id']);
formData.append('name',this.users[0]['name']);
formData.append('email',this.users[0]['email']);
formData.append('mobile',this.users[0]['mobile']);
formData.append('address',this.users[0]['address']);
formData.append('profession_id',this.users[0]['profession_id']);
for (let i = 0; i < this.users[0].activity_id.length; i++) {
  
      
      //  activity_id: this.users[0].activity_id[i]
      formData.append('activity_id',(this.users[0].activity_id[i]));
  
   }

formData.append('target',this.targets);

    // this.dataService.UserDetails_Update(this.users[0]);
    this.dataService.UserDetails_Update(formData);
  };
  



  // goback() {
  //   this.location.back();
  // }

 

}
// this.users[0]['activity_id']=Number(this.users[0].activity_id);
  // let formData = new FormData(); 
    // for (var i = 0; i < this.target.length; i++) {
      
    //   formData.append('target[]', this.target[i]);
    //   console.log(formData);
      
    // }
    // console.log(this.users[0]);
    // console.log(typeof(this.users[0]));
    // const formData = new FormData();
    // formData.append('target', this.target, this.target.name);

    // console.log(formData);