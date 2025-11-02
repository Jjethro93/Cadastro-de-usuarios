

import styled from "styled-components";

export const ContainerUser = styled.div`
 color: #fff;
 display: grid;
 grid-template-columns: 1fr 1fr;
 gap: 10px;
padding: 20px 0;
 @media (max-width: 700px)  {
grid-template-columns    : 1fr;
 }

`
export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
min-height: 100vh;
background-color:  #181f36 ;
padding: 30px 0;

`

export const CardUser = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
gap: 20px;
background-color: rgba(33, 8, 92, 0.8);
padding: 12px;
border-radius: 40px;
max-width: 400px;

h3{
    font-size: 20px;
    text-transform: capitalize;
}

p{
    font-size: 12px;
    font-weight: 200; 
}
`

export const AvatarUser = styled.img`
width: 60px;

`
export const TrashIcon = styled.img`
cursor: pointer;
&:hover{
    opacity: 0.5;
}
width: 17px;
`
export const Title = styled.h2`
align-items: center;
font-size: 38px;
font-style: normal;
font-weight:800;
color: #fff;
margin-top: 20px;
`