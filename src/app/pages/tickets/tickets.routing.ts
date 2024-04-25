import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketsComponent } from './tickets.component';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [
    { path: '', component: TicketsComponent },
    { path: 'ticket', component: TicketComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TicketsRoutingModule { }