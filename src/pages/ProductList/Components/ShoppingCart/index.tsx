import React from "react";
import * as S from "./style";
import { DtoProduct } from "../../../../service/mks/herokuapp/DtoProductsResponse";
import { ProductList } from "./ProductList";

interface ShoppingCartProps {
  visible: boolean;
  onClose: () => void;
  produtos: DtoProduct[];
  onRemove: (items: DtoProduct[]) => void
}

export function ShoppingCart(props: ShoppingCartProps) {
  return (
    <S.Drawer isVisible={props.visible}>
      <S.Header>
        <S.Title>Carrinho de compras</S.Title>
        <S.ButtonClose onClick={props.onClose}>x</S.ButtonClose>
      </S.Header>
      <ProductList products={props.produtos} onRemove={props.onRemove} />
    </S.Drawer>
  );
}
