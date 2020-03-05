import { Routes, RouterModule, Router } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "@app/_helpers/auth_guard";
import { EditComponent } from "./edit/edit.component";
import { ImportDataComponent } from "./import-data/import-data.component";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "edit", component: EditComponent, canActivate: [AuthGuard] },
  {
    path: "import-data",
    component: ImportDataComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModules {}
