import { ErrorHandler } from '@angular/core';

export class HttpService2ErrorHandler implements ErrorHandler {
    handleError(error) {
        alert('An unexpected error occurred.');
        console.log(error);
    }
}
