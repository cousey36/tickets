import { HttpHeaders } from "@angular/common/http";

export class Funciones {
    static obtenerConfiguracionHttp() {
        return {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        }
    }
}