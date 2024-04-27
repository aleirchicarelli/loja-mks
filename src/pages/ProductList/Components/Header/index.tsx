import React from "react";
import * as S from "./Styles";
import MKSImage from "../../../../assets/MKS.png";
import SistemImage from "../../../../assets/Sistemas.png";
import Cart from "../../../../assets/cart.png";

interface HeaderProps {
 onClick: () => void 
 count: number
}
export function Header(props: HeaderProps) {
  return (
    <S.NavBar>
      <S.Content>
        <S.BoxImage>
          <img src={MKSImage} alt="" style={{ marginRight: 5}} />
          <img src={SistemImage} alt="" />
        </S.BoxImage>

        <S.ButtonCart onClick={props.onClick}>
          <img src={Cart} alt="" style={{ marginRight: 7 }} />
          {props.count}
        </S.ButtonCart>
      </S.Content>
    </S.NavBar>
  );
}
