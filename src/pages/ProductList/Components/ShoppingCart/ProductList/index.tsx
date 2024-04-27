import React from "react";
import { DtoProduct } from "../../../../../service/mks/herokuapp/DtoProductsResponse";
import { ProductItem } from "./ProductItem";
import * as S from './style'

interface ProductListProps {
  products: DtoProduct[];
  onRemove: (items: DtoProduct[]) => void
}

export function ProductList(props: ProductListProps) {
  return (
    <S.List>
      {props.products.map((item: DtoProduct) => 
        <ProductItem key={item.id} product={item}  onRemove={props.onRemove} list={props.products} />
      )}
    </S.List>
  );
}
