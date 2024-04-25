import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment.development";
import { Observable, map } from "rxjs";
import { GenericResponse } from "../models/response.model";
import { Pais } from "../models/pais.model";
import { Estado } from "../models/estado.model";
import { EstatusTicket } from "../models/estatusTicket.model";
import { Origen } from "../models/origen.model";

@Injectable({ providedIn: 'root' })
export class CatalogosService {
    private urlController: string = 'Catalogos/';

    constructor(private http: HttpClient) {
        this.urlController = `${environment.api}${this.urlController}`;
    }

    GetEstados(idPais: number): Observable<any> {
        return this.http.get(`${this.urlController}GetEstados?idPais=${idPais}`).pipe(
            map((response: any) => {
                const genericResponse = new GenericResponse<Array<Estado>>();
                genericResponse.IsValid = response.isValid;
                genericResponse.Message = response.message;
                genericResponse.Model = new Array<Estado>();
                for (const estado of response.model) {
                    genericResponse.Model.push(new Estado(estado.id, estado.idPais, estado.nombre));
                }
                return genericResponse;
            })
        );
    }

    GetEstatusTicket() {
        return this.http.get(`${this.urlController}GetEstatusTicket`).pipe(
            map((response: any) => {
                const genericResponse = new GenericResponse<Array<EstatusTicket>>();
                genericResponse.IsValid = response.isValid;
                genericResponse.Message = response.message;
                genericResponse.Model = new Array<EstatusTicket>();
                for (const estatus of response.model) {
                    genericResponse.Model.push(new EstatusTicket(estatus.id, estatus.descripcion));
                }
                return genericResponse;
            })
        );
    }

    GetOrigenes(): Observable<GenericResponse<Array<Origen>>> {
        return this.http.get(`${this.urlController}GetOrigenes`).pipe(
            map((response: any) => {
                const genericResponse = new GenericResponse<Array<Origen>>();
                genericResponse.IsValid = response.idValid;
                genericResponse.Message = response.message;
                genericResponse.Model = new Array<Origen>();
                for (const origen of response.model) {
                    genericResponse.Model.push(new Origen(origen.id, origen.descripcion));
                }
                return genericResponse;
            })
        )
    }

    GetPaises(): Observable<GenericResponse<Array<Pais>>> {
        return this.http.get(`${this.urlController}GetPaises`).pipe(
            map((response: any) => {
                const genericResponse = new GenericResponse<Array<Pais>>();
                genericResponse.IsValid = response.idValid;
                genericResponse.Message = response.message;
                genericResponse.Model = new Array<Pais>();
                for (const pais of response.model) {
                    genericResponse.Model.push(new Pais(pais.id, pais.nombre));
                }
                return genericResponse;
            })
        )
    }
}