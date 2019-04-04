import { HttpRequest, HttpHandler, HttpInterceptor, HttpEvent, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { mergeMap, delay } from 'rxjs/operators';

@Injectable()

export class FakeBackendFactory implements HttpInterceptor {

    constructor() {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return of(null)
            .pipe(mergeMap(() => {
                // tslint:disable-next-line:max-line-length
                const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1vc2ggSGFtZWRhbmkiLCJhZG1pbiI6dHJ1ZX0.cLW9jecqhrRl01agsYYl_IdU6gd2i50pbtr0cEpUT0s';
                // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1vc2ggSGFtZWRhbmkiLCJhZG1pbiI6ZmFsc2V9.4u42wKbljbJNAK5oJf4aschBKIvIKW1oCsT9JxuoKIs';
                if (request.url.endsWith('/api/authenticate') && request.method === 'POST') {
                    const body = JSON.parse(request.body);
                    if (body.email === 'mosh@domain.com' && body.password === '1234') {
                          return of(new HttpResponse({
                          status: 200,
                          body: {token: token}
                        }));
                    } else {
                        return throwError({ error: { message: 'Username or password is incorrect' } });
                    }
                }

                if (request.url.endsWith('/api/orders') && request.method === 'GET') {
                    if (request.headers.get('Authorization') === 'Bearer ' + token) {
                        return of(new HttpResponse({
                            status: 200,
                            body: [1, 2, 3]
                        }));
                    } else {
                        return of(new HttpResponse({ status: 401 }));
                    }
                }

                return of(new HttpResponse({ status: 401 }));
                return next.handle(request);
            }))
            .pipe(delay(1000));
    }
}

export let fakeBackendProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendFactory,
    multi: true
};
