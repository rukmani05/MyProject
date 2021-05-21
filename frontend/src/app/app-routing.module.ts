import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from "./services/auth-guard.service";

import { HomeComponent } from "./components/home/home.component";
import{AboutComponent}from "./components/about/about.component";
import{ContactComponent}from "./components/contact/contact.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { ContentComponent } from "./components/content/content.component";
import { LogoutComponent } from "./components/logout/logout.component";
import{MaterialsComponent}from "./components/materials/materials.component";
import { ScienceComponent } from "./components/materials/science/science.component";
import { EnglishComponent } from "./components/materials/english/english.component";
import { ComputerComponent } from "./components/materials/computer/computer.component";
import{AdminDashboardComponent}from "./components/admin-dashboard/admin-dashboard.component";
import { ManageUserComponent } from "./components/admin-dashboard/manage-user/manage-user.component";
import{ManageStandardsComponent}from "./components/admin-dashboard/manage-standards/manage-standards.component";
import{ManageSubjectsComponent}from "./components/admin-dashboard/manage-subjects/manage-subjects.component";
import { ManageContentComponent } from "./components/admin-dashboard/manage-content/manage-content.component";
import { ManageQAComponent } from "./components/admin-dashboard/manage-qa/manage-qa.component";
import { ManageMaterialsComponent } from "./components/admin-dashboard/manage-materials/manage-materials.component"
import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";
const routes: Routes = [
  { path: "", component: HomeComponent },
 {path:"about",component:AboutComponent},
 {path:"contact",component:ContactComponent},
  
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  {path:"content",component:ContentComponent},
  {path:"logout",component:LogoutComponent},
  {path:"materials",component:MaterialsComponent}, 
     {path:"english",component:EnglishComponent},
  {path:"science",component:ScienceComponent},
  {path:"computer",component:ComputerComponent},
  {path:"admindashboard",component:AdminDashboardComponent},

  {path:"manage-user",component:ManageUserComponent},
{path:"manage-standards",component:ManageStandardsComponent},
  {path:"manage-subjects",component:ManageSubjectsComponent},
  {path:"manage-content",component:ManageContentComponent},
  {path:"manage-qa",component:ManageQAComponent},
  {path:"manage-materials",component:ManageMaterialsComponent},
  {path:"user-dashboard",component:UserDashboardComponent},
   
  
 
  { path: "**", redirectTo: "" },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
