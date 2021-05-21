import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Standard } from 'src/app/models/Standard';
import { DataService } from 'src/app/services/data.service';
import{ToastrService}from 'ngx-toastr';
@Component({
  selector: 'app-add-std',
  templateUrl: './add-std.component.html',
  styleUrls: ['./add-std.component.scss']
})
export class AddStdComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddStdComponent>,
    private toastr:ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: Standard,
    public dataService: DataService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

formControl = new FormControl('', [
Validators.required
// Validators.email,
]);

getErrorMessage() {
return this.formControl.hasError('required') ? 'Required field' :

'';
}

submit() {
// emppty stuff
}

onNoClick(): void {
this.dialogRef.close();
}

public confirmAdd(): void {
this.dataService.addStd(this.data);
}
getToast(){
  this.toastr.success('Standard Added Succesfully!!','Add Standard',{
    timeOut:1000,
    positionClass:'toast-top-center'
  });
}
}
