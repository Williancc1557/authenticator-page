import { Component, OnInit } from '@angular/core';
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

  public constructor(
    public readonly apiService: ApiService,
    public readonly utilsService: UtilsService
  ) { }


  ngOnInit(): void {

  }

  isNullInput(): boolean {
    if (this.user.email == "" || this.user.password == "") {
      return true
    }
    return false
  }

  submit() {
    if (this.isNullInput()) {
      return this.utilsService.showSnackBarError("Preencha todos os campos!")
    }

    return this.apiService.signIn(this.user).subscribe({
      next: (res) => {
        localStorage.setItem("token_auth", res.body.jwt.token)
        return this.utilsService.showSnackBarSucess("Logado com sucesso!")
      },
      error: () => {
        return this.utilsService.showSnackBarError("Email ou senha invalido(s)!")
      }
    })
  }
}
