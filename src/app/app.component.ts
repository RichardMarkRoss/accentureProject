import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'accentureProject';

customOptions: OwlOptions = {
  loop: true,
  margin: 10,
  center: true,
  dots: false,

  responsive: {
  0: {
      items: 1,
      nav: true,

  },
  600: {
      items: 3,
      nav: true
  },
  1000: {
      items: 5,
      nav: true,
      loop: true
  }
  }
}

 slides = [
    {id: 1, img: "https://dummyimage.com/350x150/423b42/fff"},
    {id: 2, img: "https://dummyimage.com/350x150/2a2b7a/fff"},
    {id: 3, img: "https://dummyimage.com/350x150/1a2b7a/fff"},
    {id: 4, img: "https://dummyimage.com/350x150/7a2b7a/fff"},
    {id: 5, img: "https://dummyimage.com/350x150/4a2b7a/fff"}
  ];
}
