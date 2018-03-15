import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Injectable()
export class HttpInterceptorProvider implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.appendAuth(req, next);
  }

  appendAuth(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authHeaders: HttpHeaders = new HttpHeaders();

    authHeaders.append(
      "Authorizartion",
      "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyMkBnbWFpbC5jb20iLCJleHAiOjE1MTg2MDU1ODV9.opb6j7Z-Lc2N3yirSYbExOASTqlJ27qFPnd7eEEpkOuiXAqWVbhl7iITcFBpgNORZuq2OXE5291eslN5kJV3wA"
    );

    return next.handle(
      req.clone({
        headers: authHeaders
      })
    );
  }
}
