import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
// import { Router } from "@angular/router";

import { Observable, BehaviorSubject } from "rxjs";
import { first, catchError, tap } from "rxjs/operators";

import {Content} from '../models/Content'
import { ErrorHandlerService } from "./error-handler.service";
// import { Content } from "@angular/compiler/src/render3/r3_ast";

@Injectable({
  providedIn: "root",
})
export class ContentService {
     
    private url = "http://localhost:3000/list_content/list";
    private url_link="http://localhost:3000/search/content";
  
    
  
    constructor(
      private http: HttpClient,
      private errorHandlerService: ErrorHandlerService,
      
    ) {};
    fetchAll(offset:number,skipindex:number){
      // const options={params:new HttpParams({fromString:"offset=this.offset&skipindex=this.skipindex"})}



        // return this.http.get<Content[]>( `${this.url},${offset}&${skipindex}`);
        


         return this.http.get<Content[]>("http://localhost:3000/list_content/list?page=2");
      }



      search(){
        return this.http.get<Content[]>(this.url_link,{responseType:"json"})
      }
}