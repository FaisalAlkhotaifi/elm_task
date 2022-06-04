import { Component, OnInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';

interface CarouselData {
  title: string;
  desc: string;
  date: string;
  image: string;
} 

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  customOptions: OwlOptions = {
    rtl: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    nav: false,
    lazyLoad: true,
    items: 1,
  };

  data: CarouselData[] = [];

  constructor() { }

  ngOnInit(): void {
    this.setData();
  }

  setData() {
    this.data = [
      {
        title: 'طائرة درون لرصد حرارية متسوقي مدينة الأنعام بريده',
        desc: 'استخدمت أمانة منطقة القصيم تقنية المسح الحراري الجوي عبر استخدام طائرة درون مزودة بكاميرات حرارية حديثة لمتابعة سلامة المتسوقين بمدينة الأنعام بمدينة بريدة',
        date: '5 يناير 2020',
        image: 'assets/images/Mask_Group_100.png'
      },
      {
        title: 'طائرة درون لرصد حرارية متسوقي مدينة الأنعام بريده',
        desc: 'استخدمت أمانة منطقة القصيم تقنية المسح الحراري الجوي عبر استخدام طائرة درون مزودة بكاميرات حرارية حديثة لمتابعة سلامة المتسوقين بمدينة الأنعام بمدينة بريدة',
        date: '5 يناير 2020',
        image: 'assets/images/Mask_Group_100.png'
      },
      {
        title: 'طائرة درون لرصد حرارية متسوقي مدينة الأنعام بريده',
        desc: 'استخدمت أمانة منطقة القصيم تقنية المسح الحراري الجوي عبر استخدام طائرة درون مزودة بكاميرات حرارية حديثة لمتابعة سلامة المتسوقين بمدينة الأنعام بمدينة بريدة',
        date: '5 يناير 2020',
        image: 'assets/images/Mask_Group_100.png'
      },
      {
        title: 'طائرة درون لرصد حرارية متسوقي مدينة الأنعام بريده',
        desc: 'استخدمت أمانة منطقة القصيم تقنية المسح الحراري الجوي عبر استخدام طائرة درون مزودة بكاميرات حرارية حديثة لمتابعة سلامة المتسوقين بمدينة الأنعام بمدينة بريدة',
        date: '5 يناير 2020',
        image: 'assets/images/Mask_Group_100.png'
      },
      {
        title: 'طائرة درون لرصد حرارية متسوقي مدينة الأنعام بريده',
        desc: 'استخدمت أمانة منطقة القصيم تقنية المسح الحراري الجوي عبر استخدام طائرة درون مزودة بكاميرات حرارية حديثة لمتابعة سلامة المتسوقين بمدينة الأنعام بمدينة بريدة',
        date: '5 يناير 2020',
        image: 'assets/images/Mask_Group_100.png'
      }
    ]
  }

}
