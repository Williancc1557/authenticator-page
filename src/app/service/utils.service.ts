import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  public constructor(
    public readonly snackBar: MatSnackBar
  ) { }

  public showSnackBarSucess(msg: string) {
    return this.snackBar.open(msg, "x", {
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: "snack-bar-sucess"
    })
  }

  public showSnackBarError(msg: string) {
    return this.snackBar.open(msg, "x", {
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: ["snack-bar-error"]
    })
  }
}
