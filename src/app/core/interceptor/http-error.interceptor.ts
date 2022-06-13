import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ControllatedError } from '@core/models/controllated-error.model';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError((error: HttpErrorResponse) => {
      console.warn(error.status);
      const controllatedError = new ControllatedError();

      switch (error.status) {

        case 400:
          controllatedError.message = 'Peticion denegada';
          controllatedError.title = 'Bad Request';
          break;

        case 401:
          controllatedError.message = 'No autenticado';
          controllatedError.title = 'Unauthorized';
          break;

        case 404:
          controllatedError.message = 'No se ha encontrado el recurso soliciado';
          controllatedError.title = 'Not found';
          break;

        default:
          controllatedError.message = 'Error no identificado';
          controllatedError.title = 'Algo está mal';
          break;
      }

      return throwError(() => error);
    }));
  }
}

