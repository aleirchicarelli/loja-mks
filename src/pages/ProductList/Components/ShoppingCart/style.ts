import styled from "styled-components";

interface Props {
 isVisible: boolean
}

export const Drawer = styled.aside<Props>`
 position: absolute;
 display: flex;
 flex-direction: column;
 top: 0;
 right: 0;
 width: 406px;
 height: 100vh;
 padding: 40px;
 background-color: #0F52BA;
 transform: ${(props: Props) => props.isVisible 
  ? 'translateX(0)' 
  : 'translateX(486px)'};
 transition: transform 0.5s cubic-bezier(0.4, 0.0, 0.2, 1);
 box-shadow: 0 0 8px 8px rgba(0, 0, 0, .1);

`

export const Header = styled.header`
 display: flex;
 align-items: flex-start;
 justify-content:space-between ;
 height: 150px;
`

export const Title = styled.p`
 width: 180px;
 color: #fff;
 font-family: Montserrat;
 font-weight: 700;
 font-size: 27px;
 text-align: left;
`

export const ButtonClose = styled.button`
 height: 28px;
 width: 28px;
 border: none;
 background-color: #000;
 color: #fff;
 border-radius: 50%;
`
