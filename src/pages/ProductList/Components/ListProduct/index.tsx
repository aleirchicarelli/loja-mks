import React from "react";
import { Card } from "./components/Card";
import * as S from "./styles";
import { DtoProduct } from "../../../../service/mks/herokuapp/DtoProductsResponse";

interface ListProductProps {
  products?: DtoProduct[];
  loading: boolean;
}

export function ListProduct(props: ListProductProps) {
  console.log(props);
  return (
    <S.Container>
      <S.Grid>
        {props.products?.map((item) => (
          <Card key={item.id} product={item}  />
        ))}
      </S.Grid>
    </S.Container>
  );
}
