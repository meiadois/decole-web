import Head from 'next/head';
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { FiInstagram, FiFacebook, FiMenu, FiMail, FiChevronsDown, FiPlay, FiCheckCircle } from 'react-icons/fi';
import { IconName, RiFacebookCircleLine, RiInstagramLine, RiGooglePlayLine } from "react-icons/ri";
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
import Link from 'next/link';


function Home() {

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
      /*console.log(data.name);
      console.log(data.email);
      console.log(data.message);
      console.log(data.select);*/

      const name = data.name;
      const email = data.email;
      const message = data.message;
      const reason = data.select;


      const response = await api.post('contacts', { message, email, name, reason });
      //console.log(response.data);

    } catch (error) {
      swal("ops!", "não conseguimos entrar em contato com o serviço, tente mais tarde", "error");

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


      /*if (data.name.trim().equals("") || data.email.trim().equals("") || data.message.trim().equals("") || data.select.trim().equals("")) {


        swal("ops!", "campo preenchido só com espaço", "error");



      } else {
      }*/

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

        swal("ops!", "Sua messagem não foi enviada,tente de novo", "error");
      }


    }

  }

  return (

    <div className="container">
      <Head>
        <title>Decole</title>
        <link rel="icon" href="/LogoCircle.svg" />
      </Head>


      <main>
        <Nav />
        <div>

        </div>
        <session className="first_session" id="inicio">
          <div className="my-64">



            <h1 className="text-white text-center text-2xl sm:text-4xl" >Decole seu negócio no mundo digital! </h1>


          </div>
          <div className="items-center">





            <FiChevronsDown color={"#ffffffff"} size={40} />



          </div>




        </session>
        <session className="app_session" id="app">
          <div>

            {/*} <p className=" mt-4 p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Idealizado em 2020, a decole é um projeto de voltado para o mundo digital,  com o intuito de fortalecer os negócios dos microempreendedores através da visibilidade digital.</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Nós da Decole, sabemos a importância da presença digital para o microempreendedor. Portanto elaboramos e desenvolvemos um aplicativo interativo para lhe ajudar a decolar o seu negócio.</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Por que escolher a decole?</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Nosso aplicativo conta com um asservo de lições mostrando como acrescentar visibilidade para o seu negócio dentro das redes sociais, através de um assistente flutuante em seu celular. Além de contar com um sistema para criar parcerias e conhecer novas empresas da sua ou outras áreas.</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">///</p>*/}
            <p className="mt-4  p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-xl xl:text-xl">Diante do crescente número de usúarios na internet, várias empresas precisaram se inserir no mundo digital através das plataformas online para conquistar ainda mais clientes para o seu negócio.</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-xl xl:text-xl">Porém, não são todos os empreendedores que sabem por onde começar nesse universo e por isso nasceu o Decole, um projeto idealizado em 2020, finalista do 1º Hackathon Online do Sebrae Bahia e Grupo Rede+, que tem como objetivo fortalecer negócios através da visibilidade digital. </p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-xl xl:text-xl">O aplicativo desenvolvido conta com diversas etapas que irão apoiar as empresas no processo de transformação digital: </p>

            <div className=" mt-4 flex justify-between items-center ">
              <div>
                <div className=" p-2 flex items-center">

                  <FiCheckCircle color={"#27DEBF"} size={30} className=" rounded-full " />
                  <h3 className=" p-1 text-secondary text-sm sm:text-base md:text-xl lg:text-xl xl:text-xl">Lições de Instagram, Facebook.</h3>

                </div>

                <div className=" p-2 flex items-center">

                  <FiCheckCircle color={"#27DEBF"} size={30} className=" rounded-full " />
                  <h3 className=" p-1 text-secondary text-sm sm:text-base md:text-xl lg:text-xl xl:text-xl">Assistente Flutuante</h3>

                </div>
              </div>

              <div>
                <div className=" p-2 flex items-center">

                  <FiCheckCircle color={"#27DEBF"} size={30} strokeSidth={3} className=" rounded-full " />
                  <h3 className=" p-1 text-secondary text-sm sm:text-base md:text-xl lg:text-xl xl:text-xl">Análises de Dados.</h3>

                </div>

                <div className=" p-2 flex items-center">

                  <FiCheckCircle color={"#27DEBF"} size={30} className=" rounded-full " />
                  <h3 className=" p-1 text-secondary text-sm sm:text-base md:text-xl lg:text-xl xl:text-xl">Parceria entre Empreendedores.</h3>

                </div>
              </div>

            </div>

          </div>


          <div className=" item-center ">
            <div className=""></div>
            <div className="btntext">
              {/* <a className="btntextpri shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded inline-block text-sm px-4 py-2 leading-none border rounded text-white hover:border-red hover:text-teal-500 hover:bg-white mt-4 " href="/decole(version1.000.1).apk" download>baixar</a>*/}
              <a className="mt-4 w-64 md:w-64 lg:w-64 " href='https://play.google.com/store/apps/details?id=br.com.meiadois.decole'><img alt='Disponível no Google Play' src='/googlePlayBadge.png' /></a>
            </div>
          </div>

        </session>
        <session className="somos_session" id="somos" >

          <div className="p-2 max-w-3xl m-1 flex justify-between items-center">



            {/*<p className="text-white text-center text-justify p-2 text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">
              A Decole é uma empresa desenvolvedora de soluções no mundo digital, criada em 2020 com o intuito de fortalecer os negócios dos microempreendedores e assim prospectar os melhores contatos do mercado.
              Nós da Decole, sabemos a importância da presença digital para o microempreendedor. Por isso nosso objetivo é proporcionar a melhor formação para você.

          </p>*/}

          </div>



          <h2 className="text-white text-center text-justify text-xl sm:text-2xl"> Nosso Time</h2>


          <div className="p-1 max-w-3xl  flex justify-between items-center">



            <div className=" lg:flex lg:items-center p-1 lg:p-2 xl:p-1">
              <div className="flex-grow bg-white shadow-xl rounded-md border-gray-300 p-2 w-24 md:w-32 lg:w-32">
                <div className="items-center">
                  <div className="text-center">
                    <p className="text-base md:text-xl lg:text-xl">Davi </p>
                    <p className="md:text-sm text-xs text-gray-600">Desenvolvedor</p>

                  </div>
                </div>
              </div>
            </div>

            <div className=" lg:flex lg:items-center p-1 lg:p-2 xl:p-1">
              <div className="flex-grow bg-white shadow-xl rounded-md border-gray-300 p-2 w-24 md:w-32 lg:w-32">
                <div className="items-center">
                  <div className="text-center">
                    <p className="text-base md:text-xl lg:text-xl">Eduardo</p>
                    <p className="md:text-sm text-xs text-gray-600">Desenvolvedor</p>

                  </div>
                </div>
              </div>
            </div>


            <div className=" lg:flex lg:items-center p-1 lg:p-2 xl:p-1">
              <div className="flex-grow bg-white shadow-xl rounded-md border-gray-300 p-2 w-24 md:w-32 lg:w-32">
                <div className="items-center">
                  <div className="text-center">
                    <p className="text-base md:text-xl lg:text-xl">Guilherme</p>
                    <p className="md:text-sm text-xs text-gray-600">Desenvolvedor</p>

                  </div>
                </div>
              </div>
            </div>


          </div>


          <div className=" max-w-3xl flex justify-between items-end">



            <div className=" lg:flex lg:items-center p-1 lg:p-2 xl:p-1">
              <div className="flex-grow bg-white shadow-xl rounded-md border-gray-300 p-2 w-24 md:w-32 lg:w-32">
                <div className="items-center">
                  <div className="text-center">
                    <p className="text-base md:text-xl lg:text-xl">Janaína</p>
                    <p className="md:text-sm text-xs text-gray-600">Marketing</p>

                  </div>
                </div>
              </div>
            </div>

            <div className=" lg:flex lg:items-center p-1 lg:p-2 xl:p-1">
              <div className="flex-grow bg-white shadow-xl rounded-md border-gray-300 p-2 w-24 md:w-32 lg:w-32">
                <div className="items-center">
                  <div className="text-center">
                    <p className="text-base md:text-xl lg:text-xl">João</p>
                    <p className="md:text-sm text-xs text-gray-600">Desenvolvedor</p>

                  </div>
                </div>
              </div>
            </div>


            <div className=" lg:flex lg:items-center p-1 lg:p-2 xl:p-1">
              <div className="flex-grow bg-white shadow-xl rounded-md border-gray-300 p-2 w-24 md:w-32 lg:w-32">
                <div className="items-center">
                  <div className="text-center">
                    <p className="text-base md:text-xl lg:text-xl">Naiara</p>
                    <p className="md:text-sm text-xs text-gray-600">Testes</p>

                  </div>
                </div>
              </div>
            </div>





          </div>


          <div className="p-1 max-w-3xl flex justify-between items-end">



            <div className=" lg:flex lg:items-center p-1 lg:p-2 xl:p-1">
              <div className="flex-grow bg-white shadow-xl rounded-md border-gray-300 p-2 w-24 md:w-32 lg:w-32">
                <div className="items-center">

                  <div className="text-center">
                    <p className="text-base md:text-xl lg:text-xl">Ronaldo</p>
                    <p className=" md:text-sm text-xs text-gray-600">Desenvolvedor</p>

                  </div>
                </div>
              </div>
            </div>




          </div>


        </session>
        <session className="faleconosco_session" id="fale-conosco">



          <div className="md:flex md:items-center">

            <h1 className=" text-left mb-2 text-secondary  text-xl sm:text-2xl lg:text-2xl xl:text-2xl" >Mande uma mensagem para a gente: </h1>

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
                  e-mail
                  </label>
                <Input name="email" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-green-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="email" placeholder="Ex: suporte@decole.com" />

              </div>
            </div>


            <div className="flex flex-wrap ">
              <div className="w-full px-5">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-message">
                  Mensagem
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




            <div className=" item-center ">
              <div className=""></div>
              <div className="btntext">
                <button className="btntextpri shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded inline-block text-sm px-4 py-2 leading-none border rounded text-white hover:border-red hover:text-teal-500 hover:bg-white mt-4 " type="submit">
                  Enviar
                </button>
              </div>
            </div>



          </Form>




        </session>
      </main>

      <footer className="footer_session items-center">


        <div className=" max-w-5xl  flex justify-between items-center">
          <a href="https://www.facebook.com/Decole-104392271249723">

            <RiFacebookCircleLine color={"#ffffffff"} size={24} className=" " />
          </a>
          <a href="https://www.instagram.com/decole.app">
            <RiInstagramLine color={"#ffffffff"} size={24} className="ml-8  " />

          </a>
          <a href="https://play.google.com/store/apps/details?id=br.com.meiadois.decole">
            <RiGooglePlayLine color={"#ffffffff"} size={24} className="ml-8 " />

          </a>
          {/*} <a>
            <FiMail color={"#ffffffff"} className="rounded-full hover:bg-red_primary" />

  </a>*/}

        </div>



        <div className=" max-w-5xl  flex justify-between items-center">

          <Link href='/uso'>
            <a
              className="text-xs"
              href='/uso'
            >
              Termos de uso
            </a>
          </Link>

          <Link href='/privacidade'>
            <a
              className="text-xs"
              href='/privacidade'
            >
              Política de privacidade
            </a>
          </Link>

        </div>


        <div className="items-center">

          <h2 className="text-center  md:text-xs text-xs text-gray-500">©️ 2020 Decole App </h2>




        </div>

      </footer>
    </div >
  )
}

Home.getInitialProps = () => {
  console.log("Server side rendering!")
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default Home