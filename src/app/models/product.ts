export type ItemAvailability = 'A' | 'O' ;

export interface Product {
    productId: number;
    productName: string;
    description:string;
    price :Number;
    availability:string;   
    imgUrl: any;
}