import styled from "styled-components";

export const Card = styled.div`
 width: 217px;
 height: 285px;
 box-shadow: 0 0 8px 2px rgba(0, 0, 0, .1);
 border-radius: 8px;
 position: relative;
`

export const Image = styled.img`
 height: 138px;

`
export const Content = styled.div`
 padding: 0 15px;
 height: 40px;
 display: flex;
 align-items: flex-start;
 justify-content: space-between;


`
export const Title = styled.h3`
 width: 120px;
 font-family: Montserrat;
 font-weight: 400;
 font-size: 16px;
 color: #2c2c2c;
 text-align: left;
 margin: 0;

`

export const Price = styled.span`
 width: 64px;
 height: 26px;
 border-radius: 5px;
 background-color: #000;
 color: #fff;
 font-size: 12px;
 font-weight: 700;
 line-height: 25px;
 text-align: center;
 vertical-align: middle;
`

export const Description = styled.p`
 font-family: Montserrat;
 font-weight: 300;
 font-size: 10px;
 line-height: 12px;
 text-align: left;
 padding: 0 15px;

`

export const Button = styled.button`
 width: 100%;
 height: 31px;
 border: none;
 border-radius: 0 0 8px 8px;
 background-color: #0f52ba;
 color: #fff;
 position: absolute;
 bottom: 0;
 left: 0;
 display: flex;
 justify-content: center;
 align-items: center;
`

export const Icon = styled.img`
width: 12px;
height: auto;
margin-right: 10px;
`
