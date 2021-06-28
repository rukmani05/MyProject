import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";

import { Observable, BehaviorSubject } from "rxjs";
import { first, catchError, tap } from "rxjs/operators";

import { User } from "../models/User";
import { ErrorHandlerService } from "./error-handler.service";



@Injectable({
  providedIn: "root",
})
export class AuthService {
  private url = "http://localhost:3000";
  private link = 'http://localhost:3000/view_profile/pic';

  isUserLoggedIn$ = new BehaviorSubject<boolean>(false);
  isAdminLoggedIn$ =new BehaviorSubject<boolean>(false);
  
  userId: Pick<User, "id">;
  roles:Pick<User,"roles">;

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };


  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService,
    private router: Router
  ) {}

  signup(user: Omit<User, "id">): Observable<User> {
    return this.http
      .post<User>(`${this.url}/register`, user,this.httpOptions)
      .pipe(
        first(),
        catchError(this.errorHandlerService.handleError<User>("signup"))
      );
  }

  login(
    // console.log(this.httpOptions)
    email: Pick<User, "email">,
    password: Pick<User, "password">,
    
  ): Observable<{
   
    token: string;
    userId: Pick<User, "id">;
    
   
  }> {
    return this.http
      .post(`${this.url}/login`, { email, password }, this.httpOptions)
      .pipe(
        first(),
        tap((tokenObject: { token: string; userId: Pick<User, "id">; roles:string;name:string,user:number}) => {
          this.userId = tokenObject.userId;
         
         localStorage.setItem("token", tokenObject.token);
         localStorage.setItem("name",tokenObject.name);
          localStorage.setItem("userId",JSON.stringify(this.userId));

          if(tokenObject.roles=='admin'){
            this.isAdminLoggedIn$.next(true);
             this.router.navigate(['manage-content']);
           
          }else{
            this.isUserLoggedIn$.next(true);
            this.router.navigate(['manage-content']);
          }
        }),
        catchError(
          this.errorHandlerService.handleError<{
            token: string;
            userId: Pick<User, "id">;
          }>("login")
        )
      );
  }
  logout(){
    
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    this.isUserLoggedIn$.next(false);
     this.isAdminLoggedIn$.next(false);
    this.router.navigate(['login']);
    }
 
}

