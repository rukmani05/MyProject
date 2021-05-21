import { HttpClient } from '@angular/common/http';
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { Standard } from 'src/app/models/Standard';

import {BehaviorSubject, fromEvent, merge, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {DataSource} from '@angular/cdk/collections';
import { DataService } from 'src/app/services/data.service';
import { AddStdComponent } from 'src/app/dialogs/add-std/add-std.component';
import { EditStdComponent } from 'src/app/dialogs/edit-std/edit-std.component';
import { DeleteStdComponent } from 'src/app/dialogs/delete-std/delete-std.component';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-manage-standards',
  templateUrl: './manage-standards.component.html',
  styleUrls: ['./manage-standards.component.scss']
})
export class ManageStandardsComponent implements OnInit {

  displayedColumns = ['standard_name','actions'];
  exampleDatabase: DataService | null;
  dataSource: ExampleDataSource | null;
  index: number;
  id: number;

  constructor(public httpClient: HttpClient,
              public dialog: MatDialog,
              public dataService: DataService,
              public toastr:ToastrService) {}

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild('filter',  {static: true}) filter: ElementRef;

  ngOnInit() {
    this.loadData();
  }
  

  refresh() {
    this.loadData();
  }

 
  addNew() {
    const dialogRef = this.dialog.open(AddStdComponent, {
      data: {issue: Standard}
    });
  }

  start(i: number, id: number, standard_name: string, section: string){
    // index row is used just for debugging proposes and can be removed
    this.index = i;
    console.log(this.index);
    const dialogRef = this.dialog.open(EditStdComponent, {
      data: {id: id, standard_name: standard_name, section: section}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // When using an edit things are little different, firstly we find record inside DataService by id
        const foundIndex = this.exampleDatabase.dataChange2.value.findIndex(x => x.id );
        // Then you update that record using data from dialogData (values you enetered)
        this.exampleDatabase.dataChange2.value[foundIndex] = this.dataService.getData();
        // And lastly refresh table
        this.refreshTable();
      }
    });
  }

  delete(i: number, id: number,standard_name:string){
    this.index = i;
    this.id = id;
    const dialogRef = this.dialog.open(DeleteStdComponent, {
      data: {id: id, standard_name: standard_name}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        const foundIndex = this.exampleDatabase.dataChange2.value.findIndex(x=>x.id);
        // for delete we use splice in order to remove single object from DataService
        this.exampleDatabase.dataChange2.value.splice(foundIndex, 1);
        this.refreshTable();
      }
      
    });
  }


  private refreshTable() {
    // Refreshing table using paginator
    // Thanks yeager-j for tips
    // https://github.com/marinantonio/angular-mat-table-crud/issues/12
    this.paginator._changePageSize(this.paginator.pageSize);
  }
  public loadData() {
    this.exampleDatabase = new DataService(this.httpClient);
    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
    fromEvent(this.filter.nativeElement, 'keyup')
     
      .subscribe(() => {
        if (!this.dataSource) {
          return;
        }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
  }
}

export class ExampleDataSource extends DataSource<Standard> {
  _filterChange = new BehaviorSubject('');

  get filter(): string {
    return this._filterChange.value;
  }

  set filter(filter: string) {
    this._filterChange.next(filter);
  }

  filteredData: Standard[] = [];
  renderedData: Standard[] = [];

  constructor(public _exampleDatabase: DataService,
              public _paginator: MatPaginator,
              public _sort: MatSort) {
    super();
    // Reset to the first page when the user changes the filter.
    this._filterChange.subscribe(() => this._paginator.pageIndex = 0);
  }

    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<Standard[]> {
      // Listen for any changes in the base data, sorting, filtering, or pagination
      const displayDataChanges = [
        this._exampleDatabase.dataChange2,
        this._sort.sortChange,
        this._filterChange,
        this._paginator.page
      ];
  
      this._exampleDatabase.getAllStd();
  
  
      return merge(...displayDataChanges).pipe(map( () => {
          // Filter data
          this.filteredData = this._exampleDatabase.std.slice().filter((issue: Standard) => {
            const searchStr = (issue.id + issue.standard_name + issue.section ).toLowerCase();
            return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
          });
  
          // Sort filtered data
          const sortedData = this.sortData(this.filteredData.slice());
  
          // Grab the page's slice of the filtered sorted data.
          const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
          this.renderedData = sortedData.splice(startIndex, this._paginator.pageSize);
          return this.renderedData;
        }
      ));
    }
  
    disconnect() {}
  
  
    /** Returns a sorted copy of the database data. */
    sortData(data: Standard[]): Standard[] {
      if (!this._sort.active || this._sort.direction === '') {
        return data;
      }
  
      return data.sort((a, b) => {
        let propertyA: number | string = '';
        let propertyB: number | string = '';
  
        switch (this._sort.active) {
          case 'id': [propertyA, propertyB] = [a.id, b.id]; break;
          case 'title': [propertyA, propertyB] = [a.standard_name, b.standard_name]; break;
     
        
        }
  
        const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
        const valueB = isNaN(+propertyB) ? propertyB : +propertyB;
  
        return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
      });
    }
}
