import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserParamsDto } from 'src/app/models/user.dto';
import { ApiService } from 'src/app/service/api.service';
import { UtilsService } from 'src/app/service/utils.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
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

    return this.apiService.signUp(this.user).subscribe({
      next: (res) => {
        this.loading = false

        localStorage.setItem("token_auth", res.body.jwt.token)

        this.utilsService.showSnackBarSucess("Cadastrado com sucesso!")

        this.router.navigate([""])
      },
      error: (err) => {
        this.loading = false

        if (err.error.statusCode == 400) {
          return this.utilsService.showSnackBarError({
            msg: "Email ou senha invalido(s)!"
          })
        } else if (err.error.statusCode == 409) {
          return this.utilsService.showSnackBarError({
            msg: "Esse email já foi cadastrado!"
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
