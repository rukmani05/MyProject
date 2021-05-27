import { Component, OnInit } from '@angular/core';
import { AddContentComponent } from 'src/app/dialogs/add-content/add-content.component';
import { Content } from 'src/app/models/Content';
import { HttpClient } from '@angular/common/http';
import { ElementRef,  ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


// import {BehaviorSubject, fromEvent, merge, Observable} from 'rxjs';
// import {map} from 'rxjs/operators';
// import {DataSource} from '@angular/cdk/collections';
import { DataService } from 'src/app/services/data.service';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { EditContentComponent } from 'src/app/dialogs/edit-content/edit-content.component';
import { DeleteContentComponent } from 'src/app/dialogs/delete-content/delete-content.component';
import { Router } from '@angular/router';
import { merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { ContentService } from 'src/app/services/content.service';



@Component({
  selector: 'app-manage-content',
  templateUrl: './manage-content.component.html',
  styleUrls: ['./manage-content.component.scss']
})
export class ManageContentComponent implements OnInit {
  img17:string="assets/images/img17.jpg";
contents;

exampleDatabase: DataService| null;


index: number;
id: number;
  filteredData: import("d:/demoproject/frontend/src/app/models/Subject").Subject[];

  constructor(public dialog: MatDialog,
     public dataService: DataService,
     public toastr:ToastrService,
     public httpClient: HttpClient,
     private router: Router,
     public sanitizer: DomSanitizer,
    ) { }

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild('filter',  {static: true}) filter: ElementRef;

  ngOnInit(): void {
    
    this.dataService.viewContents().subscribe(contents=>{
      this.contents=contents;
      console.log(contents);
    });
  
    this.loadData();
  
  }
  refresh() {
    this.loadData();
  }

 addNew() {
    const dialogRef = this.dialog.open(AddContentComponent, {
      data: {issue: Content}
    });
  }
   
  startEdit( id: number, title:string,summary:string,standard_name:string,subject_name:string) {
    this.id = id;
 
  
    const dialogRef = this.dialog.open(EditContentComponent, {
      data: { id:id,title:title,summary:summary,standard_name:standard_name,subject_name:subject_name}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // When using an edit things are little different, firstly we find record inside DataService by id
        const foundIndex = this.exampleDatabase.dataChange4.value.findIndex(x => x.id === this.id);
        // Then you update that record using data from dialogData (values you enetered)
        this.exampleDatabase.dataChange.value[foundIndex] = this.dataService.getDialogData();
        // And lastly refresh table
   
      }
    });
  }

  delete( id: number){
   
    this.id = id;
    const dialogRef = this.dialog.open(DeleteContentComponent, {
      data: {id: id}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        const foundIndex = this.exampleDatabase.dataChange4.value.findIndex(x=>x.id);
        // for delete we use splice in order to remove single object from DataService
        this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
        
      }
      
    });
  }
  public loadData() {
    this.exampleDatabase = new DataService(this.httpClient, this.router
      );
   
    
    // fromEvent(this.filter.nativeElement, 'keyup')
     
      // .subscribe(() => {
      //   if (!this.dataSource) {
      //     return;
      //   }
      //   this.dataSource.filter = this.filter.nativeElement.value;
      // });
  }
}


