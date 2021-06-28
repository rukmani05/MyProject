import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Component, Inject, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {FormControl, Validators} from '@angular/forms';
import{ToastrService}from 'ngx-toastr';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-edit-content',
  templateUrl: './edit-content.component.html',
  styleUrls: ['./edit-content.component.scss']
})
export class EditContentComponent implements OnInit {
  subjects;
  standards;

  constructor(public dialogRef: MatDialogRef<EditContentComponent>,
    private toastr:ToastrService,
    @Inject(MAT_DIALOG_DATA) public content: any, public dataService: DataService,
    
   ) { }
  ngOnInit(): void {
    this.dataService.getSub().subscribe(subjects=>{
      this.subjects=subjects;
    })
    this.dataService.getStd().subscribe(standards=>{
      this.standards=standards;
    })
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

Edit(): void {
this.dataService.updateContent(this.content);
console.log(this.content);
}
getToast(){
  
  this.toastr.success('Content edited Succesfully!!','Update Content',{
    timeOut:2000,
    positionClass:'toast-top-center'
  });
}




}
