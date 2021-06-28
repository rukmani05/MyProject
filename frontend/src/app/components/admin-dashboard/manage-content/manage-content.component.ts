import { Component, OnInit } from '@angular/core';
import { AddContentComponent } from 'src/app/dialogs/add-content/add-content.component';
import { Content } from 'src/app/models/Content';
import { HttpClient } from '@angular/common/http';
import { ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';



import { DataService } from 'src/app/services/data.service';

import { ToastrService } from 'ngx-toastr';
import { EditContentComponent } from 'src/app/dialogs/edit-content/edit-content.component';
import { DeleteContentComponent } from 'src/app/dialogs/delete-content/delete-content.component';
import { Router } from '@angular/router';

import { DomSanitizer } from '@angular/platform-browser';

// import { FileUploader } from 'ng2-file-upload';
import { AuthService } from 'src/app/services/auth.service';


const URL = 'http://localhost:3000/upload';
@Component({
  selector: 'app-manage-content',
  templateUrl: './manage-content.component.html',
  styleUrls: ['./manage-content.component.scss']
})
export class ManageContentComponent implements OnInit {
  // public uploader: FileUploader = new FileUploader({
  //   url: URL,
  //   itemAlias: 'file'
  // });
  isUserlogged = false;
  isAdminlogged = false;
  img17: string = "assets/images/img17.jpg";
  contents;
  exampleDatabase: DataService | null;
  index: number;
  id: number;


  constructor(public dialog: MatDialog,
    public dataService: DataService,
    public toastr: ToastrService,
    public httpClient: HttpClient,
    private router: Router,
    public sanitizer: DomSanitizer,
    private authService: AuthService
  ) {


  }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('filter', { static: true }) filter: ElementRef;

  ngOnInit(): void {
    this.authService.isUserLoggedIn$.subscribe((isLoggedIn) => {
      this.isUserlogged = isLoggedIn;

    });
    this.authService.isAdminLoggedIn$.subscribe((isUser) => {
      this.isAdminlogged = isUser;
    });
    this.dataService.viewContents().subscribe(contents => {
      this.contents = contents;
   
    });

    this.loadData();

    // this.uploader.onAfterAddingFile = (file) => {
    //   file.withCredentials = false;
    // };
    // this.uploader.onCompleteItem = (item: any, status: any) => {
    //   console.log('Uploaded File Details:', item);
    //   this.toastr.success('File successfully uploaded!');
    // };
  }
  refresh() {
    this.loadData();
  }

  addNew() {
    const dialogRef = this.dialog.open(AddContentComponent, {
      data: { issue: Content }
    });
  }

  startEdit(id: number, title: string, summary: string, standard_name: string, subject_name: string, links: string) {
    this.id = id;


    const dialogRef = this.dialog.open(EditContentComponent, {
      data: { id: id, title: title, summary: summary, standard_name: standard_name, subject_name: subject_name, links: links }
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

  delete(id: number) {

    this.id = id;
    const dialogRef = this.dialog.open(DeleteContentComponent, {
      data: { id: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        const foundIndex = this.exampleDatabase.dataChange4.value.findIndex(x => x.id);
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


