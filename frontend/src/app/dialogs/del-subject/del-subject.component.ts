import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import{ToastrService}from 'ngx-toastr';

@Component({
  selector: 'app-del-subject',
  templateUrl: './del-subject.component.html',
  styleUrls: ['./del-subject.component.scss']
})
export class DelSubjectComponent implements OnInit {

  loading$=this.dataService.loading$;
  constructor(public dialogRef: MatDialogRef<DelSubjectComponent>,
    private toastr:ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any, public dataService: DataService) { }
  ngOnInit(): void {
    
  }

onNoClick(): void {
this.dialogRef.close();
}

Delete(data:any): void {
  console.log(data);
this.dataService.deleteSub(data);
}
getToast(){
  this.toastr.success('Subject Deleted Succesfully!!','Delete Subject',{
    timeOut:1000,
    positionClass:'toast-top-center'
  });
}

}
