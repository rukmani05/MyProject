// import { Component, Inject, OnInit } from '@angular/core';
// import { FormControl, Validators } from '@angular/forms';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { User } from 'src/app/models/User';
// import { DataService } from 'src/app/services/data.service';

// @Component({
//   selector: 'app-add',
//   templateUrl: './add.component.html',
//   styleUrls: ['./add.component.scss']
// })
// export class AddComponent implements OnInit {

//   constructor(public dialogRef: MatDialogRef<AddComponent>,
//     @Inject(MAT_DIALOG_DATA) public data: User,
//     public dataService: DataService) { }
//   ngOnInit(): void {
//     throw new Error('Method not implemented.');
//   }
//     formControl = new FormControl('', [
//       Validators.required
//       // Validators.email,
//     ]);
  
//     getErrorMessage() {
//       return this.formControl.hasError('required') ? 'Required field' :
//         this.formControl.hasError('email') ? 'Not a valid email' :
//           '';
//     }
  
//     submit() {
//     // emppty stuff
//     }
  
//     onNoClick(): void {
//       this.dialogRef.close();
//     }
  
//     public confirmAdd(): void {
//       this.dataService.addIssue(this.data);
//     }
  

// }
