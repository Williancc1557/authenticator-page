import { AfterViewInit, Component, OnInit } from '@angular/core';

declare var anime: any;

@Component({
  selector: 'app-title-animated',
  templateUrl: './title-animated.component.html',
  styleUrls: ['./title-animated.component.css']
})
export class TitleAnimatedComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let textWrapper = document.querySelector('.c2 .letters');
    textWrapper!.innerHTML = textWrapper!.textContent!.replace(/\S/g, "<span class='letter' style='display:inline-block;'>$&</span>");

    anime.timeline({ loop: true })
      .add({
        targets: '.c2 .line',
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 700,
      })
      .add({
        targets: '.c2 .line',
        translateX: [0, document!.querySelector('.c2 .letters')!.getBoundingClientRect().width + 10],
        easing: "easeOutExpo",
        duration: 700,
        delay: 200
      }).add({
        targets: '.c2 .letter',
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=775',
        delay: (el: any, i: any) => 34 * (i + 1)
      }).add({
        targets: '.c2',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 10000
      });
  }

}
