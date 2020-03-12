import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

// services
import { AppRoutingModules } from "./app.routing.module";

// material ui
import { MaterialComponents } from "./assets/material.modules";

// self components
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { HeaderComponent } from "./header/header.component";
import { DropdownDirective } from "./_shared/dropdown.directive";
import { FlexLayoutModule } from "@angular/flex-layout";
import { JwtInterceptor } from "@app/_helpers/jwt_interceptors";
import { EditComponent } from "./edit/edit.component";
import { BottomModalSheetComponent } from "./bottom-modal-sheet/bottom-modal-sheet.component";
import { TaskDialogComponent } from "./task-dialog/task.dialog.component";
import { TaskDetailComponent } from './task-detail/task-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DropdownDirective,
    EditComponent,
    BottomModalSheetComponent,
    TaskDialogComponent,
    TaskDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModules,
    FlexLayoutModule,
    HttpClientModule,
    MaterialComponents
  ],
  entryComponents: [BottomModalSheetComponent, TaskDialogComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
