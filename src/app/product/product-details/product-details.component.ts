import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
  
})
export class ProductDetailsComponent implements OnInit {
  @Input() public productData: Product;
  
  constructor() { }

  ngOnInit() {
  }

}
