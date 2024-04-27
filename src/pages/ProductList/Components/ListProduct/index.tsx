import React from "react";
import { Card } from "./components/Card";
import * as S from "./styles";
import { DtoProduct } from "../../../../service/mks/herokuapp/DtoProductsResponse";

interface ListProductProps {
  products?: DtoProduct[];
  loading: boolean;
  onBuy: (items: DtoProduct[]) => void
  list: DtoProduct[]
}

export function ListProduct(props: ListProductProps) {
  return (
    <S.Container>
      <S.Grid>
        {props.products?.map((item) => (
          <Card key={item.id} product={item} onBuy={props.onBuy} list={props.list}  />
        ))}
      </S.Grid>
    </S.Container>
  );
}
