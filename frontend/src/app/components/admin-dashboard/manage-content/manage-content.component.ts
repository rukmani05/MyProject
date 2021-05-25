import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AddContentComponent } from 'src/app/dialogs/add-content/add-content.component';
import { Content } from 'src/app/models/Content';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-manage-content',
  templateUrl: './manage-content.component.html',
  styleUrls: ['./manage-content.component.scss']
})
export class ManageContentComponent implements OnInit {
  img17:string="assets/images/img17.jpg";

 

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
   
  }
 
  

  
  addNew() {
    const dialogRef = this.dialog.open(AddContentComponent, {
      data: {issue: Content}
    });
  }
  
}
