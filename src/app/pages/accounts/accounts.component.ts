import { Component, OnInit } from '@angular/core';
import { CatalogosService } from '../../core/services/catalogos.service';
import { Pais } from '../../core/models/pais.model';
import { GenericResponse } from '../../core/models/response.model';
import { Estado } from '../../core/models/estado.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html'
})
export class AccountsComponent implements OnInit {
  accountForm: FormGroup;
  estados: Array<Estado> = new Array<Estado>();
  gettingEstados: boolean = true;
  gettingPaises: boolean = true;
  modalAccountVisible: boolean = false;
  modalAccountTitle: string = '';
  paises: Array<Pais> = new Array<Pais>();

  constructor(private catalogosService: CatalogosService, private formBuilder: FormBuilder) {
    this.accountForm = this.formBuilder.group({
      id: null,
      nombreEmpresa: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.GetPaises();
  }

  GetEstados(idPais: number) {
    this.gettingEstados = true;
    this.catalogosService.GetEstados(idPais)
      .subscribe((res: GenericResponse<Array<Estado>>) => {
        if (res.Model != null) {
          this.estados = res.Model;
        }
        this.gettingEstados = false;
      });
  }

  GetPaises() {
    this.gettingPaises = true;
    this.catalogosService.GetPaises()
      .subscribe((res: GenericResponse<Array<Pais>>) => {
        if (res.Model != null) {
          this.paises = res.Model;
          this.GetEstados(this.paises[0].Id);
        }
        this.gettingPaises = false;
      })
  }

  HideAccount() {
    this.modalAccountVisible = false;
  }

  SaveAccount() {
    this.modalAccountVisible = false;
  }

  ShowAccount() {
    this.modalAccountTitle = 'Crear cuenta';
    this.modalAccountVisible = true;
  }
}
