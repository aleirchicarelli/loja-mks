import styled from "styled-components";

export const Product = styled.div`
 position: relative;
 display: flex;
 align-items: center;
 background-color: #fff;
 width: 100%;
 height: 95px;
 border-radius: 8px;
`

export const Image = styled.img`
 width: 50px;
`

export const Title = styled.p`
 width: 180px;
 font-family: Montserrat;
 font-weight: 400;
 font-size: 13px;
 text-align: left;
 color: #000;
`

export const Price = styled.p`
 width: 180px;
 font-family: Montserrat;
 font-weight: 400;
 font-size: 13px;
 text-align: left;
 color: #000;
`

export const ButtonClose = styled.button`
 position: absolute;
 display: flex;
 top: -5px;
 right: -5px;
 height: 18px;
 width: 18px;
 border: none;
 background-color: #000;
 color: #fff;
 border-radius: 50%;
`

