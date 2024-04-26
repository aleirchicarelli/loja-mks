import styled from "styled-components";

export const Container = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 50px;

`

export const Grid = styled.div`
 width: auto; 
 display: grid;
 grid-template-columns: repeat(4, auto);
 gap: 15px;
`