import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Content } from 'src/app/models/Content';
import { DataService } from 'src/app/services/data.service';
import{ToastrService}from 'ngx-toastr';


@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.scss']
})
export class AddContentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddContentComponent>,
    private toastr:ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: Content,
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
this.dataService.addContent(this.data);
}

getToast(){
  this.toastr.success('Content Added Succesfully!!','Add Content',{
    timeOut:1000,
    positionClass:'toast-top-center'
  });
}
}
