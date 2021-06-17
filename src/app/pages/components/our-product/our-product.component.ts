import { Component, OnInit } from '@angular/core';
import { ProductModels } from '../../models/product-models';

@Component({
  selector: 'app-our-product',
  templateUrl: './our-product.component.html',
  styleUrls: ['./our-product.component.scss']
})
export class OurProductComponent implements OnInit {

  cardDatas = [
    {
      type: "platinum ",
      image: 'platinum.png'
    },
    {
      type: "gold ",
      image: 'gold.png'
    },
    {
      type: "silver ",
      image: 'silver.png'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
