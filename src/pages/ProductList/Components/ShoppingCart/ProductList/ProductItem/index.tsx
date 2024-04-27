import React from "react";
import { DtoProduct } from "../../../../../../service/mks/herokuapp/DtoProductsResponse";
import * as S from "./style";

interface ProductItemProps {
  product: DtoProduct;
  onRemove: (items: DtoProduct[]) => void;
  list: DtoProduct[];
}
export function ProductItem(props: ProductItemProps) {
 const { list, product, onRemove } = props
  const handleRemove = () => {
   const index = list.findIndex(item => item.id === product.id);

     const newList = list.splice(index, 1);
     onRemove(newList);

  }
  return (
    <S.Product>
      <S.ButtonClose onClick={handleRemove}>x</S.ButtonClose>
      <S.Image src={props.product.photo} />
      <S.Title>{props.product.name}</S.Title>

      <S.Price>{props.product.price}</S.Price>
    </S.Product>
  );
}
