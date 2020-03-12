import { Routes, RouterModule, Router } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "@app/_helpers/auth_guard";
import { EditComponent } from "./edit/edit.component";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "editUser", component: EditComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModules {}
