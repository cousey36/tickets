import { NgModule } from "@angular/core";
import { ContactsComponent } from "./contacts.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ModalModule } from "../../modules/modal/modal.module";
import { ContactsRoutingModule } from "./contacts.routing";

@NgModule({
    declarations: [
        ContactsComponent
    ],
    imports: [
        CommonModule,
        ContactsRoutingModule,
        FormsModule,
        ModalModule
    ]
})
export class ContactsModule { }