import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Content } from 'src/app/models/Content';
import { DataService } from 'src/app/services/data.service';
import{ToastrService}from 'ngx-toastr';
import * as CryptoJS from "crypto-js";
import { HttpHeaders } from '@angular/common/http';
import { elementAt } from 'rxjs/operators';
// import { Subject } from 'src/app/models/Subject';



@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.scss']
})
export class AddContentComponent implements OnInit {
  subjects;
  standards;
  uploadedFiles: any ;
  targets: any;
  imageUrl: any;
  
  constructor(public dialogRef: MatDialogRef<AddContentComponent>,
    private toastr:ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: Content,
   public dataService: DataService) { }
   
  


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




// fileChange(element){
 
//   this.uploadedFiles = element.target.files;
//   console.log(element.target.files);
// console.log(this.uploadedFiles);
// }
handleFileInput(file: FileList) {
   
  this.targets = file.item(0);

  
  let reader = new FileReader();
  reader.onload = (event: any) => {
    this.imageUrl = event.target.result;
  }
  reader.readAsDataURL(this.targets);
  console.log(this.targets);
 
  
}

public confirmAdd():void{
//   console.log(this.uploadedFiles,"Hellooo");
//   //  let formData ;
//   let formData = new FormData(); 
//   for (var i = 0; i < this.uploadedFiles.length; i++) {

   
//     formData.append('target', this.uploadedFiles[i]);

//       // formData.push(this.uploadedFiles[i]);
//     // this.data["target"]=this.uploadedFiles[i];
//     // formData.append("target",this.uploadedFiles[i])
//     // console.log(formData,"hii");
//     //  console.log(this.data["target"]);
//      }

// // this.data["file"]=formData;
console.log(this.data);
// // console.log(this.data,this.data["target"]);


// formData.append('title',this.data['title']);
// formData.append('summary',this.data['summary']);
// formData.append('links',this.data['links']);
// formData.append('sub_id',this.data['sub_id']);
// formData.append('std_id',this.data['std_id']);

// formData.forEach((value,key) => {
//   console.log(key+" "+value)
// });
// this.dataService.addContent(formData);

let formData=new FormData();
formData.append('std_id',this.data['std_id']);
formData.append('sub_id',this.data['sub_id']);
formData.append('title',this.data['title']);
formData.append('summary',this.data['summary']);
formData.append('links',this.data['links']);
formData.append('target',this.targets);

this.dataService.addContent(formData);




}
}


// handleFileInput(files: FileList) {
//   this.fileToUpload = files.item(0);
// }
// fileChange(element) {
//   this.uploadedFiles = element.target.files;
// }

  // public fileChange(element:any){
  //   this.uploadedFiles = element.target.files;
  // }
// public fileChange(event:any){
//   const files = event.target.files;
//     const file: File = files[0];
//     let reader = new FileReader();
//     reader.addEventListener(
//       "load",
//       () => {
//         this.logMd5(reader.result);
//       },
//       false
//     );
//     reader.readAsDataURL(file);
//   }
//   private logMd5(blob) {
//     const hash = CryptoJS.MD5(CryptoJS.enc.Latin1.parse(blob));
//     const md5 = hash.toString(CryptoJS.enc.Hex)
//     this.md5 = md5;
//   }
// fileChange(event){
//   if(event.target.files.length>0){
//     const file=event.target.files[0];
//  this.data.file_key=file;
//   }
// }


// public confirmAdd(): void {

//  console.log(this.data);
//  console.log(this.data.file_key);
//  this.dataService.addContent(this.data);
// }


// getToast(){
//   this.toastr.success('Content Added Succesfully!!','Add Content',{
//     timeOut:1000,
//     positionClass:'toast-top-center'
//   });
// }
//   const file: File = this.uploadedFiles[0];
//       let reader = new FileReader();
//       reader.addEventListener(
//         "load",
//         () => {
//           this.logMd5(reader.result);
//         },
//         false
//       );
//       reader.readAsDataURL(file);
// }
// private logMd5(blob) {
//       const hash = CryptoJS.MD5(CryptoJS.enc.Latin1.parse(blob));
//       const md5 = hash.toString(CryptoJS.enc.Hex)
//       this.md5 = md5;
//     }