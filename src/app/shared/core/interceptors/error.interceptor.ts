import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, EMPTY, Observable } from 'rxjs';
// import { AppStateService } from '../../services/app-state/app-state.service';
import { MessageService } from 'primeng/api';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private messageService: MessageService // private appStateService: AppStateService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg: string;
        if (error.error instanceof ErrorEvent) {
          errorMsg = `Error: ${error.error.message}`;
        } else {
          errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
        }
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: errorMsg,
        });

        // move it to so some kind of store....
        // this.appStateService.stopLoading();

        return EMPTY;
      })
    );
  }
}
