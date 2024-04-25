import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ModalModule } from "../../modules/modal/modal.module";
import { AccountsComponent } from "./accounts.component";
import { AccountsRoutingModule } from "./accounts.routing";

@NgModule({
    declarations: [
        AccountsComponent
    ],
    imports: [
        CommonModule,
        AccountsRoutingModule,
        FormsModule,
        ModalModule
    ]
})
export class AccountsModule { }