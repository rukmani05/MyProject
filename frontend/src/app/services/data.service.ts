import { ContentChild, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/User';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Standard } from '../models/Standard';

import { Subject } from '../models/Subject';
import { Content } from '../models/Content';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly API_URL = 'http://localhost:3000/view_user/';
  private url = 'http://localhost:3000/update/user';
  private URL = 'http://localhost:3000/set_user/inactive';
  private api1 = 'http://localhost:3000/view_std/';
  private api2 = 'http://localhost:3000/update/standard';
  private api3 = 'http://localhost:3000/delete_standard';
  private link = 'http://localhost:3000/create_standard';
  private link2 = 'http://localhost:3000/view_subject/';
  private link3 = 'http://localhost:3000/create_subject';
  private link4 = 'http://localhost:3000/update/subject';
  private link5='http://localhost:3000/delete_subject';
  private link6='http://localhost:3000/create_content';
  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };


  dataChange: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  dataChange2: BehaviorSubject<Standard[]> = new BehaviorSubject<Standard[]>([]);
  dataChange3: BehaviorSubject<Subject[]> = new BehaviorSubject<Subject[]>([]);
  dataChange4:BehaviorSubject<Content[]>=new BehaviorSubject<Content[]>([]);
  private _loading = new BehaviorSubject<boolean>(false);

  
  public readonly loading$ = this._loading.asObservable();


  // Temporarily stores data from dialogs
  dialogData: any;
  dialogData1: any;
  dialogData2: any;
  dialogData3:any;
  constructor(private httpClient: HttpClient) { }

  show() {
    this._loading.next(true);
  }

  hide() {
    this._loading.next(false);
  }

  get data(): User[] {
    return this.dataChange.value;
  }
  get std(): Standard[] {
    return this.dataChange2.value;
  }
  get sub(): Subject[] {
    return this.dataChange3.value
  }
  getDialogData() {
    return this.dialogData;
  }
  getData() {
    return this.dialogData1;
  }
 Refreshed_data(){
return this.dialogData2;
 }

  getAllIssues(): void {
    this.httpClient.get<User[]>(this.API_URL).subscribe(data => {
      this.dataChange.next(data);
    },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      });
  }


  getAllStd(): void {
    this.httpClient.get<Standard[]>(this.api1).subscribe(std => {
      this.dataChange2.next(std);
    },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      });
  }

  getAllSubjects(): void {
    this.httpClient.get<Subject[]>(this.link2).subscribe(sub => {
      this.dataChange3.next(sub);
    },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      });

  }



  addStd(data): void {
    this.httpClient.post<Standard[]>(this.link, data).subscribe();
    this.dialogData1 = data;

  }
  addSub(data): void {
    this.httpClient.post<Subject[]>(this.link3, data).subscribe();
    this.dialogData2 = data;
}
addContent(data):void{
  this.httpClient.post<Content[]>(this.link6,data).subscribe();
  this.dialogData3=data;
}


  updateIssue(data): void {
    console.log(data)
    this.httpClient.post(this.url, data).subscribe();
    this.dialogData = data;

  }
  updateStd(data): void {
    this.httpClient.post(this.api2, data).subscribe();
    this.dialogData1 = data;
  }
  updateSub(data): void {
    this.httpClient.post(this.link4, data).subscribe();
    this.dialogData2 = data;
  }

  setinactive(data): void {
    this.httpClient.put(this.URL, data).subscribe();
    this.dialogData = data;
  }


  deleteStd(data) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: {
        id: data
      }
    }
    this.httpClient.delete('http://localhost:3000/delete_standard', options).subscribe(results => {
      console.log(results)
    })
  }

  deleteSub(data){
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: {
        id: data
      }
    }
    this.httpClient.delete('http://localhost:3000/delete_subject', options).subscribe(results => {
      console.log(results)
    })
  }
}
