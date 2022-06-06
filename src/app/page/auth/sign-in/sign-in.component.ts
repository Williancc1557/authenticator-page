import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetUserDto } from 'src/app/models/get-user.dto';
import { SignInDto } from 'src/app/models/sign-in.dto';
import { SignUpDto } from 'src/app/models/sign-up.dto';
import { UserDto, UserParamsDto } from 'src/app/models/user.dto';

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

  constructor() { }

  ngOnInit(): void {

  }
}
