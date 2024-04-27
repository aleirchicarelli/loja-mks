import { DtoProduct } from "../../../../../../service/mks/herokuapp/DtoProductsResponse";
import * as S from "./styles";
import ImgBag from "../../../../../../assets/shopping-bag.svg";

//adicionar tipagem
interface CardProps {
  product: DtoProduct;
  onBuy: (items: DtoProduct[]) => void;
  list: DtoProduct[]
}

export function Card(props: CardProps) {
   function addItem() {
    const newItem = props.product
    const newList = [...props.list, newItem]
    props.onBuy(newList)
   }
  const price = props.product.price.split(".")[0];
  return (
    <S.Card>
      <S.Image src={props.product.photo} />

      <S.Content>
        <S.Title>{props.product.name}</S.Title>

        <S.Price>R${price}</S.Price>
      </S.Content>

      <S.Description>{props.product.description}</S.Description>

      <S.Button
        onClick={addItem}
      >
        <S.Icon src={ImgBag} alt="ícone de cesto de compras" />
        Comprar
      </S.Button>
    </S.Card>
  );
}
