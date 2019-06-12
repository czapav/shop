export interface CartResponse {
    products: ProductInCart[];
    date_add: string;
    _id: string;
    user_id: string;
}

export interface ProductInCart {
    product_id: string;
    name: string;
    price: number;
    imgUrl: string;
    quantity: number;
    priceTotal: number;
    dateAdd: string;
}

export interface QuantityInCart {
    quantity: number;
    priceTotal: number;
}
