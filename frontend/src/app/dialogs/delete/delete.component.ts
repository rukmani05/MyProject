import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import{ToastrService}from 'ngx-toastr';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteComponent>,
    private toastr:ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any, public dataService: DataService) { }
  ngOnInit(): void {
    
  }

onNoClick(): void {
this.dialogRef.close();
}

confirmEdit(): void {
 
this.dataService.setinactive(this.data);
console.log(this.data);
}
getToast(){
  this.toastr.success('User Inactived Succesfully!!','Inactive User',{
    timeOut:1000,
    positionClass:'toast-top-center'
  });
}
}
