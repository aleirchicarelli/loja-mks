import { DtoProduct } from "../../../../../../service/mks/herokuapp/DtoProductsResponse";
import * as S from "./styles";
import ImgBag from "../../../../../../assets/shopping-bag.svg"

//adicionar tipagem
interface CardProps {
 product: DtoProduct
}

export function Card(props:CardProps) {
  //adicionar icone no botão de comprar
const price = props.product.price.split('.')[0]
  return (
    <S.Card>
      <S.Image src={props.product.photo} />

      <S.Content>
        <S.Title>{props.product.name}</S.Title>

        <S.Price>R${price}</S.Price>
      </S.Content>

      <S.Description>
       {props.product.description}
      </S.Description>

      <S.Button>
       <S.Icon src={ImgBag} alt="ícone de cesto de compras" />
       Comprar
       </S.Button>
    </S.Card>
  );
}
