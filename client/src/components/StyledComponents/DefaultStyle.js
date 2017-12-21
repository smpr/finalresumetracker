import React from 'react'
import styled from 'styled-components'


const BodyContainer = styled.div`
display:flex;
justify-content: space-around;

height: 100vh;
`
const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-content: center;
`
const FormContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-content: center;
width: 25vw;


padding: 20px;
text-align: center;
box-shadow: 3px 3px 3px #191919;
button {

}
a {
    
    text-decoration: none;
}

`

const Button = styled.button`
:hover {
    box-shadow: 0 7px 7px 0 rgba(255,255,255,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
:focus {
    outline: none;
   
    box-shadow: 0 0 0 0;
   

}

`
const ImgContainer = styled.div`
img {
width: 25vw;
}
`
const LinkDiv = styled.div`
display:flex;
justify-content: space-between;
`
const NavContainer = styled.div`
display:flex;
align-items: center;
justify-content: space-around;


height: 5vh;

box-shadow: 10px 10px 5px #888888;
`
const InnerForm = styled.div`
display: flex;
justify-content: space-around;
`
const ListDiv = styled.div`
display:flex;
align-items: center;
justify-content: center;
align-content: center;
flex-direction: column;
`
const Style = {
  // width: '10%',
//   height: '95%',
//   margin: '10px',
//   border: '.5px solid #37474F',
//   backgroundColor: '#37474F'
};
const TextLabelStyle = {
//   errorStyle: {
//     color: orange500,
//   },
//   underlineStyle: {
//     borderColor: orange500,
//   },
//   floatingLabelStyle: {
//     color: blueGrey100,
//   },
//   floatingLabelFocusStyle: {
//     color: cyan500,
//   },
};
export {
  Style, TextLabelStyle, NavContainer, ListDiv, InnerForm, FormContainer, LinkDiv, Container, BodyContainer, Button, ImgContainer

}