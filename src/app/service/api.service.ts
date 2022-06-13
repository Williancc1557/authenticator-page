import { GetUserDto } from 'src/app/models/get-user.dto';
import { SignInDto } from 'src/app/models/sign-in.dto';
import { IsValidTokenDto } from 'src/app/models/is-valid-token.dto';
import { UserParamsDto } from 'src/app/models/user.dto';
import { SignUpDto } from 'src/app/models/sign-up.dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { isVerifiedDto } from '../models/is-verified.dto';

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
    return this.http.post<SignInDto>(this.baseUrl + "/sign-in", user)
  }

  getUser(email: string): Observable<GetUserDto> {
    return this.http.get<GetUserDto>(this.baseUrl + "/get/user/" + email)
  }

  isValidToken(token: string): Observable<IsValidTokenDto> {
    return this.http.get<IsValidTokenDto>(this.baseUrl + `/is-valid-token/${token}`)
  }

  isVerified(email: string): Observable<isVerifiedDto> {
    return this.http.get<isVerifiedDto>(this.baseUrl + "/is-verified/" + email)
  }
}