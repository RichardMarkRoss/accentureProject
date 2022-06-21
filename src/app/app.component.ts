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
}
