import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Subject} from 'src/app/models/Subject';
import {Standard} from 'src/app/models/Standard';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  searchTerm: string;
  searchSubject:string;
  
  totalLength: any;
  page: number = 1;

  p: number = 1;
  limit: number = 2;
  total: number;

  constructor(private contentService: ContentService) { }
  columns = ["Standard","Subject","Title", "Summary"];
  index = ["standard_name","subject_name","title", "summary"];
  contents=[];
  ngOnInit(): void {
    this.getcontent(this.p);
  }
  
  getcontent(p: number) {
    
    let offset = (p - 1) * this.limit;
    let skipindex = offset + this.limit;
    this.contentService.fetchAll(offset, skipindex).subscribe
      (
        (result) => {
          this.contents = result;
          // this.totalLength=result.length;
        },
        (error) => console.log(error)
      )
  }
  getPage(pageNo: number) {

    this.p = pageNo;
    this.getcontent(this.p)

  }

 

  // searchThis(){
  // this.contentService.search().subscribe(

  //   (error)=>console.log(error)
  // )
  // }
}


