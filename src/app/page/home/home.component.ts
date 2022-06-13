import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private readonly router: Router,
    private readonly authService: ApiService
  ) { }

  ngOnInit() {
    const token = localStorage.getItem("token_auth")

    if (!token) {
      return this.router.navigate(["/login"])
    }

    this.authService.isValidToken(token).subscribe({
      next: (validTokenOutput) => {
        this.authService.isVerified(validTokenOutput.body.email)
          .subscribe((isVerifiedOutput) => {
            if (!isVerifiedOutput.body) {
              return this.router.navigate(["/verify"])
            }
            return
          })
      },
      error: () => {
        this.router.navigate(["/login"])
      }
    })

    return
  }

}
