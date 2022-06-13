import { ErrorHandler } from "@angular/core";
import { ControllatedError } from "@core/models/controllated-error.model";

export class CustomErrorHandler implements ErrorHandler {

  handleError(error: ControllatedError): void {
    // TODO: servicio de notificaciones, modales, alert, etc

    console.log("-------------------------")
    console.log(error);
    console.log("-------------------------")
  }

}
