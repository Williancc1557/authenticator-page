import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { UtilsService } from 'src/app/service/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private readonly router: Router,
    private readonly authService: ApiService,
    private readonly utilService: UtilsService
  ) { }

  ngOnInit() {
    const token = this.utilService.existsToken()

    this.authService.isValidToken(token).subscribe({
      next: (validTokenOutput) => {
        this.authService.isVerified(validTokenOutput.body.email)
          .subscribe((isVerifiedOutput) => {
            if (!isVerifiedOutput.body) {
              this.router.navigate(["/check-email"])
            }
          })
      },
      error: () => {
        this.router.navigate(["/login"])
      }
    })

    return
  }

}
