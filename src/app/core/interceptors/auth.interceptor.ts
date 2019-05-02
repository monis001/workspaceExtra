import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(){}
    intercept(req: HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
        const authHeader = 'Mr. Ayush';
        const authRequest = req.clone({
            headers : req.headers.set('Authorization',authHeader)
        })

        // if (!authRequest.headers.has('Content-Type')) {
        //     req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        // }

        return next.handle(authRequest).pipe(
            map((event:HttpEvent<any>)=>{
                // DO something with response 
                // if(event instanceof HttpResponse){

                // }
                return event ;
            }),
            catchError((error: HttpErrorResponse)=>{
                // Do something with error;
                return throwError(error);
            }));
    }
}