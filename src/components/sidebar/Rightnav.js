import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
   list-style:none;
   display:flex;
   flex-flow: row nowrap;
   background-color:#3fff;
   
   

   li{
     padding:18px 10px;
   }

   @media (max-width:768px){
     flex-flow:column nowrap;
     background-color:#34494F;
     position:fixed;
     transform:${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
     top:0;
     right:0;
     height:100vh;
     width:300px;
     padding-top: 3.5ram;
     transition: transform 0.3s ease-in-out;
   }

   li{
     color:#ffffff;
   }
`;


const RightNav = ({ open }) => {

  return (
    <Ul open={open}>
      {/*<a href="#inicio" className="text-teal-500 hover:text-green mt-8">Inicio</a>
      <a href="#app" className="text-teal-500 hover:text-green">Sobre App</a>
      <a href="#somos" className="text-teal-500 hover:text-green">Quem Somos</a>
      <a href="#fale-conosco" className="text-teal-500 hover:text-green">Fale Conosco</a>

      <a className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Baixar</a>*/}
      <li>ronaldoaqui</li>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact Us</li>
      <li>Sign In</li>
      <li>Sign Up</li>
    </Ul>
  )
}

export default RightNav
