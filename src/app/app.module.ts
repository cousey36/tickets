import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { UsersComponent } from "./pages/users/users.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterOutlet } from "@angular/router";
import { AppRoutingModule } from "./app.routes";
import { MasterComponent } from "./components/master/master.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        UsersComponent,
        MasterComponent,
        SidebarComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterOutlet,
        AppRoutingModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }