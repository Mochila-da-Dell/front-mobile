import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpEvent, HTTP_INTERCEPTORS, HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ErrorIntercptor implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("Passou no interceptor");
        return next.handle(req)
        .catch((error, caught) => {

            let errorObj = error;
            if(errorObj.error){
                errorObj = errorObj.error;
            }
            if(!errorObj.status){
              errorObj = JSON.parse(error); 
            }
            console.log("Erro detectado pelo interceptor:");
            console.log(errorObj);
            return Observable.throw(errorObj);
        }) as any;
    }
}

export const ErrorIntercptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorIntercptor,
    multi: true,
}