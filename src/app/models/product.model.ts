export interface Product {
    id: string;
    title: string;
    imageURL: string;
    price: number;
    category: string;
    description: string;
    tags?: string []
}