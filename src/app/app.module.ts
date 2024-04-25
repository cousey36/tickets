import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { UsersComponent } from "./pages/users/users.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { RouterOutlet } from "@angular/router";
import { AppRoutingModule } from "./app.routes";
import { MasterComponent } from "./components/master/master.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TokenInterceptor } from "./core/helpers/token.interceptor";
import { LoginComponent } from "./pages/login/login.component";
import { ModalModule } from "./modules/modal/modal.module";

@NgModule({
    declarations: [
        AppComponent,
        UsersComponent,
        MasterComponent,
        SidebarComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterOutlet,
        AppRoutingModule,
        ModalModule
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true
    }],
    bootstrap: [AppComponent]
})
export class AppModule { }