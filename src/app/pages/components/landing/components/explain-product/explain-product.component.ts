import { Component, OnInit } from '@angular/core';
import { Benefits } from '../../../../models/benefits-models';

@Component({
  selector: 'app-explain-product',
  templateUrl: './explain-product.component.html',
  styleUrls: ['./explain-product.component.scss']
})
export class ExplainProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  reasons: Benefits[] = [
    {title:"Delivery",description:"We have delivery service to all city in indonesia."},
    {title:"Price",description:"Good quality with the best prices."},
    {title:"Legality",description:"We commit to keep your trusted with legality transaction."},
    {title:"Reward",description:"More transaction more point and reward."},
    {title:"Transaction",description:"Our transaction is simple and secure."},
    {title:"Brand",description:"Our product is the best on quality and brand."}
  ]

}
