import Head from 'next/head';
import React, { useState } from 'react';
import styled from 'styled-components';
import { FiInstagram, FiFacebook, FiMenu, FiMail } from 'react-icons/fi';
import Rightnav from '../components/sidebar/Rightnav';
import Burger from '../components/sidebar/Burger';

import Nav from '../components/nav';
import Nav1 from '../components/sidebar/Navbar';



export default function Home() {

  var [open, setOpen] = useState(false)

  return (

    <div className="container">
      <Head>
        <title>Decole.app</title>
        <link rel="icon" href="/LogoCircle.svg" />
      </Head>


      <main>
        <Nav />
        <div>

        </div>
        <session className="first_session" id="inicio">
          <div >



            <h1 className="text-white text-center text-2xl sm:text-6xl" >Decole seu negócio no mundo digital! </h1>

          </div>

        </session>
        <session className="app_session" id="app">
          <div>
            <h1>Oi</h1>
            <p>tesidoamsdpmasjdiasndmuiasjdmasuidajmsdpasdomsiodmsdokam,d,</p>
          </div>
        </session>
        <session className="somos_session" id="somos" >

          <div className="p-2 max-w-3xl m-1 flex justify-between items">

            <p className="text-white text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">
              Decole é um app especialista em conhecimento digital. ? sucesso online Criado em 2020, em
              Salvador.
              Nosso trabalho é proporcionar a melhor formação digital. Nosso principal diferencial é
              proporcionar para microemp presença digital com ---- e ---- priorizando seu negócio.
              Temos especialistas nos principais serviços Digitais: Google Ads, Facebook Ads, Instagram Ads,
              Redes Sociais, E-mail Marketing, Hotsites, Criação e Otimização de Sites e SEO, e assim
              prospectar os melhores contatos do mercado.
            </p>

          </div>

          <h2 className="text-white text-center text-justify text-xl sm:text-2xl"> Nosso Time</h2>


          <div className="p-1 max-w-3xl  flex justify-between items-end">



            <div className=" lg:flex lg:items-center p-1 lg:p-2 xl:p-2">
              <div className="flex-grow bg-white shadow-xl rounded-md border-gray-300 p-2">
                <div className="sm:flex sm:items-center">
                  <div className="sm:ml-4 sm:text-left text-center">
                    <p className="text-base md:text-xl lg:text-xl">Davi  Macedo  </p>
                    <p className="text-sm text-gray-600">Programador</p>

                  </div>
                </div>
              </div>
            </div>

            <div className=" lg:flex lg:items-center p-1 lg:p-2 xl:p-2">
              <div className="flex-grow bg-white shadow-xl rounded-md border-gray-300 p-2">
                <div className="sm:flex sm:items-center">
                  <div className="sm:ml-4 sm:text-left text-center">
                    <p className="text-base md:text-xl lg:text-xl">Eduardo Correia</p>
                    <p className="text-sm text-gray-600">Programador</p>

                  </div>
                </div>
              </div>
            </div>


            <div className=" lg:flex lg:items-center p-1 lg:p-2 xl:p-2">
              <div className="flex-grow bg-white shadow-xl rounded-md border-gray-300 p-2">
                <div className="sm:flex sm:items-center">
                  <div className="sm:ml-4 sm:text-left text-center">
                    <p className="text-base md:text-xl lg:text-xl">Guilherme Cunha</p>
                    <p className="text-sm text-gray-600">Programador</p>

                  </div>
                </div>
              </div>
            </div>


          </div>


          <div className="p-1 max-w-3xl flex justify-between items-end">



            <div className=" lg:flex lg:items-center p-1 lg:p-2 xl:p-2">
              <div className="flex-grow bg-white shadow-xl rounded-md border-gray-300 p-2">
                <div className="sm:flex sm:items-center">
                  <div className="sm:ml-4 sm:text-left text-center">
                    <p className="text-base md:text-xl lg:text-xl">Janaína Souza</p>
                    <p className="text-sm text-gray-600">Programador</p>

                  </div>
                </div>
              </div>
            </div>

            <div className=" lg:flex lg:items-center p-1 lg:p-2 xl:p-2">
              <div className="flex-grow bg-white shadow-xl rounded-md border-gray-300 p-2">
                <div className="sm:flex sm:items-center">
                  <div className="sm:ml-4 sm:text-left text-center">
                    <p className="text-base md:text-xl lg:text-xl">João Carvalho</p>
                    <p className="text-sm text-gray-600">Programador</p>

                  </div>
                </div>
              </div>
            </div>


            <div className=" lg:flex lg:items-center p-1 lg:p-2 xl:p-2">
              <div className="flex-grow bg-white shadow-xl rounded-md border-gray-300 p-2">
                <div className="sm:flex sm:items-center">
                  <div className="sm:ml-4 sm:text-left text-center">
                    <p className="text-base md:text-xl lg:text-xl">Naiara Neves</p>
                    <p className="text-sm text-gray-600">Programador</p>

                  </div>
                </div>
              </div>
            </div>


          </div>


          <div className="p-1 max-w-3xl flex justify-between items-end">



            <div className=" lg:flex lg:items-center p-1 lg:p-2 xl:p-2">
              <div className="flex-grow bg-white shadow-xl rounded-md border-gray-300 p-2">
                <div className="sm:flex sm:items-center">

                  <div className="sm:ml-4 sm:text-left text-center">
                    <p className="text-base md:text-xl lg:text-xl">Ronaldo José</p>
                    <p className="text-sm text-gray-600">Programador</p>

                  </div>
                </div>
              </div>
            </div>




          </div>


        </session>
        <session className="faleconosco_session" id="fale-conosco">



          <div className="md:flex md:items-center">

            <h1 className="text-secondary text-center text-xl sm:text-4xl lg:text-6xl xl:text-6xl" >Fale Conosco </h1>

          </div>



          <form className="w-full max-w-lg">
            <div className="flex flex-wrap ">
              <div className="w-full md:w-1/2 px-5 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-name">
                  Nome
                  </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-name" type="text" placeholder="Ex: Jane" />
                <p className="text-red-500 text-xs italic">
                  Por favor, preencha este campo.</p>
              </div>


              <div className="w-full md:w-1/2 px-5">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                  email
                  </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="text" placeholder="Ex: suporte@decoleapp.com" />
                <p className="text-red-500 text-xs italic">
                  Por favor, preencha este campo.</p>
              </div>
            </div>


            <div className="flex flex-wrap ">
              <div className="w-full px-5">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-message">
                  Messagem
                  </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-message" type="text" placeholder="Ex: sua opinião" />
                <p className="text-red-500 text-xs italic">
                  Por favor, preencha este campo.</p>
              </div>
            </div>

            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="btntext">
                <button className="  btntextpri shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded inline-block text-sm px-4 py-2 leading-none border rounded text-white hover:border-red hover:text-teal-500 hover:bg-white mt-4 lg:mt-0" type="button">
                  Enviar
                </button>
              </div>
            </div>



          </form>

        </session>
      </main>

      <footer className="footer_session">


        <div className="h-screen max-w-5xl m-auto flex justify-between items-center">
          <a>

            <FiFacebook color={"#ffffffff"} className="rounded-full hover:bg-blue" />
          </a>
          <FiInstagram color={"#ffffffff"} className="mx-10 rounded-full hover:bg-instagram" />
          <FiMail color={"#ffffffff"} className="rounded-full hover:bg-red_primary" />

        </div>
      </footer>
    </div >
  )
}
