import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserParamsDto } from 'src/app/models/user.dto';
import { ApiService } from 'src/app/service/api.service';
import { UtilsService } from 'src/app/service/utils.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  user: UserParamsDto = {
    email: "",
    password: ""
  }

  loading: boolean = false

  public constructor(
    private readonly apiService: ApiService,
    private readonly utilsService: UtilsService,
    private readonly router: Router
  ) { }


  ngOnInit(): void {
    const token = localStorage.getItem("token_auth")

    if (token) {
      this.apiService.isValidToken(token).subscribe({
        next: () => {
          this.router.navigate([""])
        },
      })
    }
  }

  isNullInput(): boolean {
    if (this.user.email == "" || this.user.password == "") {
      return true
    }
    return false
  }

  submit() {
    if (this.isNullInput()) {
      return this.utilsService.showSnackBarError({
        type: 'inputUndefined'
      })
    }

    this.loading = true

    return this.apiService.signIn(this.user).subscribe({
      next: (res) => {
        localStorage.setItem("token_auth", res.body.jwt.token)

        this.loading = false

        this.utilsService.showSnackBarSucess("Logado com sucesso!")
        this.router.navigate([""])
      },
      error: (err) => {
        this.loading = false

        if (err.error.statusCode == 403) {
          return this.utilsService.showSnackBarError({
            msg: "Email ou senha invalido(s)!"
          })
        } else {
          return this.utilsService.showSnackBarError({
            type: 'internalError'
          })
        }
      }
    })
  }
}
