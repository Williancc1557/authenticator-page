import { GetUserDto } from 'src/app/models/get-user.dto';
import { SignInDto } from 'src/app/models/sign-in.dto';
import { UserParamsDto } from 'src/app/models/user.dto';
import { SignUpDto } from 'src/app/models/sign-up.dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = "http://localhost:3000"

  constructor(
    private readonly http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  signUp(user: any): Observable<SignUpDto> {
    return this.http.post<SignUpDto>(this.baseUrl + "/sign-up", user)
  }

  signIn(user: UserParamsDto): Observable<SignInDto> {
    return this.http.post<SignInDto>(this.baseUrl + "/sign-in", { user })
  }

  getUser(email: string): Observable<GetUserDto> {
    return this.http.get<GetUserDto>(this.baseUrl + "/get/" + email)
  }
}
