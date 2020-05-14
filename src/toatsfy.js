import styled from 'styled-components'

export const Container = styled.div`
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;
export const Buttons = styled.div`
display: flex;
flex-wrap: wrap;
width: 20%;
& button {
width: 100%;
height: 40px;
display: flex;
justify-content: center;
border-radius: 4px;
font-weight: bold;
font-size: 14px;
border: 0;
color: #fff;
background: #009cde;
margin-top: 5px;
cursor: pointer;
}
`;