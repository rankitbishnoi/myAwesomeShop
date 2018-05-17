import {Component, OnInit, ViewChild} from '@angular/core';
import {Input} from '@angular/core';

@Component({selector: 'app-carousel-basic', templateUrl: './carousel-basic.component.html'})
export class CarouselBasicComponent implements OnInit {
  images: Array<string>;
  @ViewChild('myCarousel') myCarousel;
  @Input() urls: string[];
  constructor() {}

  ngOnInit() {
    this.images = this.urls;
  }

}
