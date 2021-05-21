import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {CommonModule}from "@angular/common";
import {FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import {DataTablesModule} from 'angular-datatables';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

import { MatDialogModule } from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';


import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';




import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import {MatGridListModule} from '@angular/material/grid-list';

import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import{NgxPaginationModule}from "ngx-pagination";
import { NgSimpleSidebarModule } from 'ng-simple-sidebar';
import{ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {NgxSkeletonLoaderModule}from 'ngx-skeleton-loader';
// import{NgCircleProgressModule}from 'ng-circle-progress';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


import { SignupComponent } from "./components/signup/signup.component";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";

import{ContentComponent}from "./components/content/content.component";
import { LogoutComponent } from "./components/logout/logout.component";


import{NavigationComponent}from "./components/navigation/navigation.component";
import { AuthInterceptorService } from "./services/auth-interceptor.service";
import { ContentFilterPipe } from "./components/content/contentFilter.pipe";
import{SubjectFilterPipe} from "./components/content/subjectFilter.pipe";
import { MaterialsComponent } from './components/materials/materials.component';
import { EnglishComponent } from './components/materials/english/english.component';
import { ScienceComponent } from './components/materials/science/science.component';
import { ComputerComponent } from './components/materials/computer/computer.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ManageUserComponent } from "./components/admin-dashboard/manage-user/manage-user.component";
import{ManageStandardsComponent}from "./components/admin-dashboard/manage-standards/manage-standards.component";
import{ManageSubjectsComponent}from "./components/admin-dashboard/manage-subjects/manage-subjects.component";
import { ManageContentComponent } from "./components/admin-dashboard/manage-content/manage-content.component";
import { ManageQAComponent } from "./components/admin-dashboard/manage-qa/manage-qa.component";
import { ManageMaterialsComponent } from "./components/admin-dashboard/manage-materials/manage-materials.component"
import { EditComponent } from './dialogs/edit/edit.component';
import { DeleteComponent } from './dialogs/delete/delete.component';
import { AddStdComponent } from './dialogs/add-std/add-std.component';
import { EditStdComponent } from './dialogs/edit-std/edit-std.component';
import { DeleteStdComponent } from './dialogs/delete-std/delete-std.component';
 import { NetworkInterceptor } from "./services/network.interceptor";
import { DataService } from "./services/data.service";
import { AddSubjectComponent } from './dialogs/add-subject/add-subject.component';
import { EditSubjectComponent } from './dialogs/edit-subject/edit-subject.component';
import { DelSubjectComponent } from './dialogs/del-subject/del-subject.component';
import { AddContentComponent } from './dialogs/add-content/add-content.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
// import { AddComponent } from './dialogs/add/add.component';




@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    // LogoutComponent,
    ContentComponent,
    // MatPaginatorModule,
    ContentFilterPipe,
    SubjectFilterPipe,
    LogoutComponent,
    MaterialsComponent,
    EnglishComponent,
    ScienceComponent,
    ComputerComponent,
    AboutComponent,
    ContactComponent,
    AdminDashboardComponent,
    ManageUserComponent,
    ManageContentComponent,
    ManageSubjectsComponent ,
    ManageStandardsComponent,
    ManageMaterialsComponent,
    ManageQAComponent,
    EditComponent,
    DeleteComponent,
    AddStdComponent,
    EditStdComponent,
    DeleteStdComponent,
    AddSubjectComponent,
    EditSubjectComponent,
    DelSubjectComponent,
    AddContentComponent,
    UserDashboardComponent,
    // AddComponent

  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
  
    MatButtonModule,
    MatCardModule,
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,MatGridListModule,
    NgxPaginationModule,
    DataTablesModule,
    NgSimpleSidebarModule,
    MatDialogModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
     MatProgressSpinnerModule,
     HttpClientModule
   
 

   
    
  ],
  entryComponents: [
    EditComponent,
    DeleteComponent,
    EditStdComponent,
    DeleteStdComponent,
    AddStdComponent,
    AddSubjectComponent,
    EditSubjectComponent,
    DelSubjectComponent,
    AddContentComponent
 ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
     
      multi: true,
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:NetworkInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
