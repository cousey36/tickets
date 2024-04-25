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

@NgModule({
    declarations: [
        AppComponent,
        UsersComponent,
        MasterComponent,
        SidebarComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterOutlet,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }