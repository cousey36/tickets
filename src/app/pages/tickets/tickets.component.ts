import { Component, OnInit } from '@angular/core';
import { CatalogosService } from '../../core/services/catalogos.service';
import { GenericResponse } from '../../core/models/response.model';
import { EstatusTicket } from '../../core/models/estatusTicket.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html'
})
export class TicketsComponent implements OnInit {
  estatusTicket: Array<EstatusTicket> = new Array<EstatusTicket>();
  gettingEstatus: boolean = true;

  constructor(private catalogosService: CatalogosService, private router: Router) { }

  ngOnInit(): void {
    this.GetEstatus();
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

  ShowTicket() {
    this.router.navigate(['tickets/ticket']);
  }
}
