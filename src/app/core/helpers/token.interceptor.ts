import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SeguridadService } from "../services/seguridad.service";
import { Observable, catchError, of, tap } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private seguridadService: SeguridadService) { }

    private handleAuthError(err: HttpErrorResponse): Observable<any> {
        if (err.status === 401 || err.status === 423) {
            this.seguridadService.CerrarSesion();
            return of(err.message);
        }
        throw err;
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const accesstoken = localStorage.getItem('access_token');
        if (accesstoken) {
            request = request.clone({
                setHeaders: {
                    ContentType: 'application/json',
                    Authorization: 'Bearer ' + localStorage.getItem('access_token')
                }
            });
        } else {
            request = request.clone({
                setHeaders: {
                    ContentType: 'application/json'
                }
            })
        }
        return next.handle(request).pipe(
            tap(evt => {
                if (evt instanceof HttpResponse) {
                    if (evt.status == 200) {
                        localStorage.setItem('tiempo', new Date().toString());
                    }
                }
            }),
            catchError(x => this.handleAuthError(x)));
    }
}
