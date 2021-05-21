import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject } from 'src/app/models/Subject';
import { DataService } from 'src/app/services/data.service';
import{ToastrService}from 'ngx-toastr';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.scss']
})
export class AddSubjectComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<AddSubjectComponent>,
    private toastr:ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: Subject,
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
this.dataService.addSub(this.data);
}
getToast(){
  this.toastr.success('Subject Added Succesfully!!','Add Subject',{
    timeOut:1000,
    positionClass:'toast-top-center'
  });
}
}
