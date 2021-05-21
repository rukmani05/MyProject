import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import{ToastrService}from 'ngx-toastr';

@Component({
  selector: 'app-edit-std',
  templateUrl: './edit-std.component.html',
  styleUrls: ['./edit-std.component.scss']
})
export class EditStdComponent implements OnInit {

  loading$=this.dataService.loading$;

  constructor(public dialogRef: MatDialogRef<EditStdComponent>,
    private toastr:ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any, public dataService: DataService) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

formControl = new FormControl('', [
Validators.required
// Validators.email,
]);

getErrorMessage() {
return this.formControl.hasError('required') ? 'Required field' :
this.formControl.hasError('email') ? 'Not a valid email' :
'';
}

submit() {
// emppty stuff
}

onNoClick(): void {
this.dialogRef.close();
}

Edit(): void {
this.dataService.updateStd(this.data);
}
getToast(){
  this.toastr.success('User edited Succesfully!!','Update User',{
    timeOut:1000,
    positionClass:'toast-top-center'
  });
}
  

}

