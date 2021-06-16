import { FooterModels } from './../../models/footer-models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footers: FooterModels[] = [
    {
      officeName: "Central Office",
      address: "Jl. Jendral Gatot Kav. 36 - 38 Jakarta 12190 Indonesia"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
