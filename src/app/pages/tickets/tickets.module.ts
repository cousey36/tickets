import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ModalModule } from "../../modules/modal/modal.module";
import { TicketsComponent } from "./tickets.component";
import { TicketsRoutingModule } from "./tickets.routing";
import { TicketComponent } from "./ticket/ticket.component";

@NgModule({
    declarations: [
        TicketsComponent,
        TicketComponent
    ],
    imports: [
        CommonModule,
        TicketsRoutingModule,
        FormsModule,
        ModalModule
    ]
})
export class TicketsModule { }