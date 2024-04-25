import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment.development";
import { Observable } from "rxjs";
import { Cuenta } from "../models/cuenta.model";

@Injectable({ providedIn: 'root' })
export class CuentasService {
    private urlController: string = 'Cuentas/';

    constructor(private http: HttpClient) {
        this.urlController = `${environment.api}${this.urlController}`;
    }

    Delete(id: number) {
        return this.http.delete(`${this.urlController}Delete?id=${id}`);
    }

    GetAll(): Observable<object> {
        return this.http.get(`${this.urlController}GetAll`);
    }

    GetPagination(): Observable<object> {
        return this.http.get(`${this.urlController}GetPagination`);
    }

    Insert(cuenta: Cuenta): Observable<object> {
        return this.http.post(`${this.urlController}Insert`, cuenta);
    }

    Update(cuenta: Cuenta): Observable<object> {
        return this.http.put(`${this.urlController}Update`, cuenta);
    }
}