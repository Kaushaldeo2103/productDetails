import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/models/product";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.scss"],
})
export class ProductDetailComponent implements OnInit {
  products: Product[]  = [
    {
      productId: 1,
      productName: "CHECK PRINT SHIRT",
      description: "CHECK PRINT SHIRT CHECK PRINT SHIRT CHECK PRINT SHIRT",
      price: 12,
      availability: "A",
      imgUrl : "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0"
    },
    {
      productId: 2,
      productName: "GLORIA HIGH LOGO SNEAKER",
      description: "GLORIA HIGH LOGO SNEAKER GLORIA HIGH LOGO SNEAKER",
      price: 22,
      availability: "O",
      imgUrl : "https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0"
    },
    {
      productId: 3,
      productName: "CATE RIGID BAG",
      description: "CATE RIGID BAG CATE RIGID BAG",
      price: 12,
      availability: "A",
      imgUrl : "https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0"
    },
    {
      productId: 4,
      productName: "GUESS CONNECT WATCH",
      description: "GUESS CONNECT WATCH GUESS CONNECT WATCH",
      price: 32,
      availability: "O",
      imgUrl : "http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0"
    },
    {
      productId: 5,
      productName: "70s RETRO GLAM KEFIAH",
      description: "0s RETRO GLAM KEFIAH 0s RETRO GLAM KEFIAH 5",
      price: 12,
      availability: "A",
      imgUrl : "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0"
    }
  ];
  constructor() {}

  ngOnInit() {
    
  }
}
