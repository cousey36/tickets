import { Component, OnInit } from '@angular/core';
import { CatalogosService } from '../../../core/services/catalogos.service';
import { EstatusTicket } from '../../../core/models/estatusTicket.model';
import { GenericResponse } from '../../../core/models/response.model';
import { Origen } from '../../../core/models/origen.model';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
})
export class TicketComponent implements OnInit {
  estatusTicket: Array<EstatusTicket> = new Array<EstatusTicket>();
  gettingEstatus: boolean = true;
  gettingOrigenes: boolean = true;
  modalAgregarProductoVisible: boolean = false;
  origenes: Array<Origen> = new Array<Origen>();
  title: string = 'Crear Ticket';

  constructor(private catalogosService: CatalogosService) {

  }

  ngOnInit(): void {
    this.GetEstatus();
    this.GetOrigenes();
  }

  Cancel() {
    history.back();
  }

  GetEstatus() {
    this.gettingEstatus = true;
    this.catalogosService.GetEstatusTicket()
      .subscribe((res: GenericResponse<Array<EstatusTicket>>) => {
        if (res.Model != null) {
          this.estatusTicket = res.Model;
        }
        this.gettingEstatus = false;
      });
  }

  GetOrigenes() {
    this.gettingOrigenes = true;
    this.catalogosService.GetOrigenes()
      .subscribe((res: GenericResponse<Array<Origen>>) => {
        if (res.Model != null) {
          this.origenes = res.Model;
        }
        this.gettingOrigenes = false;
      });
  }
}
