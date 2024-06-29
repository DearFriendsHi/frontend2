export interface Cart {
    items: Array<CartItem>
}

export interface CartItem {
    id: string,
    title: string,
    price: number,
    product: string,
    quantity: number,
}