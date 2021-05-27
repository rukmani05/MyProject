import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import{ToastrService}from 'ngx-toastr';

@Component({
  selector: 'app-delete-content',
  templateUrl: './delete-content.component.html',
  styleUrls: ['./delete-content.component.scss']
})
export class DeleteContentComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DeleteContentComponent>,
    private toastr:ToastrService,
    @Inject(MAT_DIALOG_DATA) public content: any, public dataService: DataService) { }
  ngOnInit(): void {
    
  }

onNoClick(): void {
this.dialogRef.close();
}

Delete(): void {
 
this.dataService.inactiveContent(this.content);
console.log(this.content);
}
getToast(){
  this.toastr.success('Content Deleted Succesfully!!','Delete Contents',{
    timeOut:1000,
    positionClass:'toast-top-center'
  });
}
}
