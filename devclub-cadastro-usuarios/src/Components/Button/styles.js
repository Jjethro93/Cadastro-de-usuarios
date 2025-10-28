import styled from "styled-components"

export const Button = styled.button`
border: ${props =>props.theme === 'primary'? 
'none': 
'1px solid #39a0ebff'};
cursor: pointer;
background: ${ props => props.theme === 'primary' 
? 'linear-gradient(90deg,rgba(201, 93, 46, 1) 0%, rgba(201, 154, 66, 1) 54%, rgba(224, 216, 47, 1) 100%)'
:'transparent'
};
padding: 16px 32px;
border-radius: 30px;
color: #fff;
font-size: 16px;

width: fit - content;
transition: 0.4s ease-in-out;

&:hover{  
    opacity: 0.5;
    background: ${props=> props.theme ==='primary'? 
    '' : 
    '#fff'
    };
    color: ${props=> props.theme ==='primary'? 
    '' : 
    '#2a0665ff'
    };
}

&:active{
    opacity: 1.5;
}

` 