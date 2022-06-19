import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { UtilsService } from 'src/app/service/utils.service';

@Component({
  selector: 'app-check-email',
  templateUrl: './check-email.component.html',
  styleUrls: ['./check-email.component.css']
})
export class CheckEmailComponent implements OnInit {

  email: string = ""
  key: string = ""
  loading: boolean = false

  constructor(
    private readonly apiService: ApiService,
    private readonly router: Router,
    private readonly utilService: UtilsService
  ) { }

  ngOnInit(): void {
    const token = this.utilService.existsToken()

    this.apiService.isValidToken(token).subscribe({
      next: (validTokenOutput) => {
        this.email = validTokenOutput.body.email

        this.apiService.isVerified(validTokenOutput.body.email)
          .subscribe((isVerifiedOutput) => {
            if (isVerifiedOutput.body) {
              this.router.navigate([""])
            }
          })
      },
      error: () => {
        this.router.navigate(["/login"])
      }
    })
  }

  changeInput() {
    const key = this.key

    if (key.length == 4) {
      this.checkEmail(key)
    }
  }

  verifyIfHasUndefinedInput(): boolean {
    if (!this.key || this.key == "") {
      this.utilService.showSnackBarError({
        type: 'inputUndefined'
      })

      return false
    }
    return true
  }

  checkEmail(key: string) {
    if (!this.verifyIfHasUndefinedInput()) {
      return
    }

    this.loading = true

    this.apiService.checkEmail({
      email: this.email,
      confirmationToken: Number(key)
    }).subscribe({
      next: () => {
        this.loading = false
        this.utilService.showSnackBarSucess("Email verificado com sucesso!")
        this.router.navigate([""])
      },
      error: (err) => {
        this.loading = false

        if (err.error.statusCode != 403) {
          this.utilService.showSnackBarError({
            type: "internalError"
          })

          return
        }

        this.utilService.showSnackBarError({
          msg: "Essa chave inserida está inválida"
        })

        const localStorageKeyErrorCount = "countErrorKeyInvalid"
        const errorsCount: string | null = localStorage.getItem(localStorageKeyErrorCount)

        if (!errorsCount) {
          localStorage.setItem(localStorageKeyErrorCount, "1")
          console.log("teste");

          return
        } else {
          localStorage.setItem(localStorageKeyErrorCount, String(Number(errorsCount) + 1))
        }

        if (Number(localStorage.getItem(localStorageKeyErrorCount))! >= Number("3")) {
          localStorage.removeItem(localStorageKeyErrorCount)
          localStorage.removeItem("token_auth")
          this.utilService.showSnackBarError({
            msg: "Ocorreu muitas tentativas para inserir a chave!"
          })
          this.router.navigate(["/login"])
        }
      }
    })
  }
}
