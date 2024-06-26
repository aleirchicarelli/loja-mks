export interface DtoProductsResponse {
 count: number,
 products: DtoProduct[] 
}

export interface DtoProduct {
 id: number,
 name: string,
 brand: string,
 description: string,
 photo: string,
 price: string,
 createdAt: string,
 updatedAt: string
}