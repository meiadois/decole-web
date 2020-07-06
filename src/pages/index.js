import Head from 'next/head';
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { FiInstagram, FiFacebook, FiMenu, FiMail } from 'react-icons/fi';
import Rightnav from '../components/sidebar/Rightnav';
import Burger from '../components/sidebar/Burger';

import Nav from '../components/nav';
import Nav1 from '../components/sidebar/Navbar';
import { Form } from '@unform/web';
import Input from '../components/Form/input';
import ReactSelect from '../components/Form/select';
import * as Yup from 'yup';
import swal from 'sweetalert';
import api from '../services/api';




export default function Home() {

  var [open, setOpen] = useState(false)
  const formRef = useRef(null);
  const options = [
    { value: 'sugestão', label: 'Sugestão' },
    { value: 'dúvida', label: 'Dúvida' },
    { value: 'reclamação', label: 'Reclamação' },
    { value: 'outros', label: 'Outros' }
  ]

  async function submitForm(data) {

    try {

      //const response = await api.post('formsite',{});
      console.log(data.name);
      console.log(data.email);
      console.log(data.message);
      console.log(data.select);

      const name = data.name;
      const email = data.email;
      const message = data.message;
      const select = data.select;
      //const response = await api.post('formsite', { name, email, message, select });

    } catch (error) {

    }
  }

  async function handleSubmit(data, { reset }) {



    try {

      const screma = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        email: Yup.string().email('Digite um email válido').required(' O email é obrigatório'),
        message: Yup.string().required('A messagem é obrigatório'),
        select: Yup.string().required('A opção é obrigatório'),
      });
      await screma.validate(data, { abortEarly: false, })
      //console.log(data);

      formRef.current.setErrors({});

      submitForm(data);

      swal("Sucesso!", "Sua messagem foi enviada!", "success");

      reset();
    } catch (error) {
      console.log(data);

      if (error instanceof Yup.ValidationError) {

        const errorMessages = {};

        error.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        })

        formRef.current.setErrors(errorMessages);

      } else {

        swal("ops!", "Sua messagem não foi enviada,tente denovo", "error");
      }


    }

  }

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

            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">O Aplicativo foi desenvolvido para que seja rápido e fácil de aprender a integrar o seu negócio ao meio digital e trazendo a possibilidade de criar rede de parcerias e se impulsionar</p>
          </div>
        </session>
        <session className="somos_session" id="somos" >

          <div className="p-2 max-w-3xl m-1 flex justify-between items-center">



            <p className="text-white text-center text-justify p-2 text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">
              A Decole é uma empresa desenvolvedora de soluções no mundo digital, criada em 2020 com o intuito de fortalecer os negócios dos microempreendedores e assim prospectar os melhores contatos do mercado.
              Nós da Decole, sabemos a importância da presença digital para o microempreendedor. Por isso nosso objetivo é proporcionar a melhor formação para você.

            </p>

          </div>

          <h2 className="text-white text-center text-justify text-xl sm:text-2xl"> Nosso Time</h2>


          <div className="p-1 max-w-3xl  flex justify-between items-center">



            <div className=" lg:flex lg:items-center p-1 lg:p-2 xl:p-2">
              <div className="flex-grow bg-white shadow-xl rounded-md border-gray-300 p-2">
                <div className="sm:flex sm:items-center">
                  <div className="sm:ml-4 sm:text-left text-center">
                    <p className="text-base md:text-xl lg:text-xl">Davi  Macedo  </p>
                    <p className="text-sm text-gray-600">Desenvolvedor</p>

                  </div>
                </div>
              </div>
            </div>

            <div className=" lg:flex lg:items-center p-1 lg:p-2 xl:p-2">
              <div className="flex-grow bg-white shadow-xl rounded-md border-gray-300 p-2">
                <div className="sm:flex sm:items-center">
                  <div className="sm:ml-4 sm:text-left text-center">
                    <p className="text-base md:text-xl lg:text-xl">Eduardo Correia</p>
                    <p className="text-sm text-gray-600">Desenvolvedor</p>

                  </div>
                </div>
              </div>
            </div>


            <div className=" lg:flex lg:items-center p-1 lg:p-2 xl:p-2">
              <div className="flex-grow bg-white shadow-xl rounded-md border-gray-300 p-2">
                <div className="sm:flex sm:items-center">
                  <div className="sm:ml-4 sm:text-left text-center">
                    <p className="text-base md:text-xl lg:text-xl">Guilherme Cunha</p>
                    <p className="text-sm text-gray-600">Desenvolvedor</p>

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
                    <p className="text-sm text-gray-600">Desenvolvedor</p>

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



          <Form ref={formRef} className="w-full max-w-lg" onSubmit={handleSubmit}>
            <div className="flex flex-wrap ">
              <div className="w-full md:w-1/2 px-5 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-name">
                  Nome
                  </label>
                <Input name="name" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-green-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-name" type="text" placeholder="Ex: Jane" />

              </div>


              <div className="w-full md:w-1/2 px-5">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                  email
                  </label>
                <Input name="email" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-green-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="text" placeholder="Ex: suporte@decole.com" />

              </div>
            </div>


            <div className="flex flex-wrap ">
              <div className="w-full px-5">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-message">
                  Messagem
                  </label>
                <Input name="message" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-green-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-message" type="text" placeholder="Ex: sua opinião" />

              </div>
            </div>

            <div className="flex flex-wrap ">
              <div className="w-full px-5">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-message">
                  Opções
                  </label>
                <ReactSelect defaultValue={{ value: "", label: "Escolha uma opção" }} options={options} name="select" className=" select block appearance-none w-full   px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">

                </ReactSelect>

              </div>
            </div>




            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="btntext">
                <button className="  btntextpri shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded inline-block text-sm px-4 py-2 leading-none border rounded text-white hover:border-red hover:text-teal-500 hover:bg-white mt-4 " type="submit">
                  Enviar
                </button>
              </div>
            </div>



          </Form>




        </session>
      </main>

      <footer className="footer_session">


        <div className="h-screen max-w-5xl m-auto flex justify-between items-center">
          <a href="https://www.facebook.com/Decole-104392271249723">

            <FiFacebook color={"#ffffffff"} size={30} className="rounded-full hover:bg-blue" />
          </a>
          <a href="https://www.instagram.com/oficialdecole/?hl=pt-br">
            <FiInstagram color={"#ffffffff"} size={30} className="mx-10 rounded-full hover:bg-instagram" />

          </a>
          {/*} <a>
            <FiMail color={"#ffffffff"} className="rounded-full hover:bg-red_primary" />

  </a>*/}

        </div>
      </footer>
    </div >
  )
}
