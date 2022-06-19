import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


type snackBarErrorTypes = "internalError" | "inputUndefined"

interface SnackBarErrorInput {
  msg?: string,
  type?: snackBarErrorTypes
}


@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  public constructor(
    public readonly snackBar: MatSnackBar,
    public readonly router: Router,
  ) { }

  public showSnackBarSucess(msg: string) {

    return this.snackBar.open(msg, "x", {
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: "snack-bar-sucess"
    })
  }

  public showSnackBarError({ type, msg }: SnackBarErrorInput) {
    const snackBarConfig: MatSnackBarConfig<any> = {
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: ["snack-bar-error"]
    }

    let messageWithType: string | undefined

    switch (type) {
      case "inputUndefined":
        messageWithType = "Preencha todos os campos!"
        break
      case "internalError":
        messageWithType = "Ocorreu algum erro, tente novamente mais tarde!"
        break
    }

    return this.snackBar.open(messageWithType || msg!, "x", snackBarConfig)
  }

  public existsToken(): string {
    const token = localStorage.getItem("token_auth")

    if (!token) {
      this.router.navigate(["/login"])
    }
    return token!
  }
}
