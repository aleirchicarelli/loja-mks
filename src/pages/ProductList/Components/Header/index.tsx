import React from "react";
import * as S from "./Styles";
import MKSImage from "../../../../assets/MKS.png";
import SistemImage from "../../../../assets/Sistemas.png";
import Cart from "../../../../assets/cart.png";

export function Header() {
  return (
    <S.NavBar>
      <S.Content>
        <S.BoxImage>
          <img src={MKSImage} alt="" />
          <img src={SistemImage} alt="" />
        </S.BoxImage>

        <S.ButtonCart onClick={() => {}}>
          <img src={Cart} alt="" style={{ marginRight: 7 }} />0
        </S.ButtonCart>
      </S.Content>
    </S.NavBar>
  );
}
