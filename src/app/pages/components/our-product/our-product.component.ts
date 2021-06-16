import { Component, OnInit } from '@angular/core';
import { ProductModels } from '../../models/product-models';

@Component({
  selector: 'app-our-product',
  templateUrl: './our-product.component.html',
  styleUrls: ['./our-product.component.css']
})
export class OurProductComponent implements OnInit {

  // ourProduct: ProductModels[] = [
  //   {
  //     type: "platinum",
  //     image: "platinum.png"
  //   },
  //   {
  //     type: "gold",
  //     image: "gold.png"
  //   },
  //   {
  //     type: "silver",
  //     image: "silver.png"
  //   }
  // ]

  cardDatas = [
    {
      type: "Platinum",
      image: 'platinum.png'
    },
    {
      type: "Gold",
      image: 'gold.png'
    },
    {
      type: "Silver",
      image: 'silver.png'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
