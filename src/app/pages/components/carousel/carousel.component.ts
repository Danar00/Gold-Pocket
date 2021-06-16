import { CarouselModels } from './../../models/carousel-models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  carouselModels: CarouselModels[] = [
    {
      type: "Platinum",
      banner: "carousel-1.png"
    },
    {
      type: "Gold",
      banner: "carousel-2.png"
    },
    {
      type: "Silver",
      banner: "carousel-3.png"
    }
  ]

}
