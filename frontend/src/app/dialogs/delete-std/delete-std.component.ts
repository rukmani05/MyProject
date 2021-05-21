import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import{ToastrService}from 'ngx-toastr';

@Component({
  selector: 'app-delete-std',
  templateUrl: './delete-std.component.html',
  styleUrls: ['./delete-std.component.scss']
})
export class DeleteStdComponent implements OnInit {

  loading$=this.dataService.loading$;
  constructor(public dialogRef: MatDialogRef<DeleteStdComponent>,
    private toastr:ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any, public dataService: DataService) { }
  ngOnInit(): void {
    
  }

onNoClick(): void {
this.dialogRef.close();
}

Delete(data:any): void {
  console.log(data);
this.dataService.deleteStd(data);
}
getToast(){
  this.toastr.success('Standard Deleted Succesfully!!','Delete Standard',{
    timeOut:1000,
    positionClass:'toast-top-center'
  });
}

}
