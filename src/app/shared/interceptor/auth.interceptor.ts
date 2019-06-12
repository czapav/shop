import {HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';


export class AuthInterceptor implements HttpInterceptor {

    private httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Authorization: 'token_cd'
            })
        };

    intercept(req: HttpRequest<any>, next: HttpHandler): any {
        const reqCloned = req.clone(this.httpOptions);
        return next.handle(reqCloned);
    }
}
