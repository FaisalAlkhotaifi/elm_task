import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  features: {image: string, name: string}[] = [];

  constructor() { }

  ngOnInit(): void {
    this.setFeature();
  }

  setFeature() {
    this.features = [
      {
        image: 'assets/images/Calendar-1.svg',
        name: 'الفعاليات'
      },
      {
        image: 'assets/images/suitcase-1.svg',
        name: 'التدريب'
      },
      {
        image: 'assets/images/Drone.svg',
        name: 'اندية الدرونز'
      },
      {
        image: 'assets/images/wallet.svg',
        name: 'المتاجر'
      },
      {
        image: 'assets/images/card.svg',
        name: 'العضويات'
      },
      {
        image: 'assets/images/Star.svg',
        name: 'الشهادات الاحترافية'
      },
    ]
  }

}
