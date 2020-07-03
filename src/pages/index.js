import Head from 'next/head';
import { FiInstagram, FiFacebook, FiMenu, FiMail } from 'react-icons/fi';



export default function Home() {
  return (

    <div className="container">
      <Head>
        <title>Decole.app</title>
        <link rel="icon" href="/LogoCircle.svg" />
      </Head>


      <main>


        <nav className="navbar">
          <div className="p-2 max-w-5xl m-auto flex justify-between items-center">
            <img src="../decole_verdev2.svg" width={150} className="p-2 hidden md:inline-block" />
            <img src="../LogoCircle.svg" width={60} className="p-2 md:hidden inline-block" />
            <div className="p-2 flex items-center hidden md:inline-block">
              <a href="#inicio" className="text-teal-500 hover:text-green">Inicio</a>
              <a href="#app" className="text-teal-500 hover:text-green">Sobre App</a>
              <a href="#somos" className="text-teal-500 hover:text-green">Quem Somos</a>
              <a href="#fale-conosco" className="text-teal-500 hover:text-green">Fale Conosco</a>

              <a className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Baixar</a>


            </div>
            <div className="p-3 flex items-center md:hidden inline-block">


              <FiMenu size={40} color={"#ffffffff"} />

            </div>
          </div>

        </nav>

        <div>

        </div>
        <session className="first_session" id="inicio">
          <div className="p-2">



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

            <p className="text-white text-center text-justify text-xl sm:text-2xl">
              Decole é um app especialista em conhecimento digital. ? sucesso online Criado em 2020, em
              Salvador.
              Nosso trabalho é proporcionar a melhor formação digital. Nosso principal diferencial é
              proporcionar para microemp presença digital com ---- e ---- priorizando seu negócio.
              Temos especialistas nos principais serviços Digitais: Google Ads, Facebook Ads, Instagram Ads,
              Redes Sociais, E-mail Marketing, Hotsites, Criação e Otimização de Sites e SEO, e assim
              prospectar os melhores contatos do mercado.
            </p>

          </div>

          <h2 className="text-white text-center text-justify text-2xl sm:text-4xl"> Nosso Time</h2>


          <div className="p-1 max-w-3xl  flex justify-between items-end">



            <div className=" lg:flex lg:items-center p-1 lg:p-2 xl:p-2">
              <div className="flex-grow bg-white shadow-xl rounded-md border-gray-300 p-2">
                <div className="sm:flex sm:items-center">
                  <div className="sm:ml-4 sm:text-left text-center">
                    <p className="text-xl">Davi   Souza   </p>
                    <p className="text-sm text-gray-600">Programador</p>

                  </div>
                </div>
              </div>
            </div>

            <div className=" lg:flex lg:items-center p-1 lg:p-2 xl:p-2">
              <div className="flex-grow bg-white shadow-xl rounded-md border-gray-300 p-2">
                <div className="sm:flex sm:items-center">
                  <div className="sm:ml-4 sm:text-left text-center">
                    <p className="text-xl">Eduardo Correia</p>
                    <p className="text-sm text-gray-600">Programador</p>

                  </div>
                </div>
              </div>
            </div>


            <div className=" lg:flex lg:items-center p-1 lg:p-2 xl:p-2">
              <div className="flex-grow bg-white shadow-xl rounded-md border-gray-300 p-2">
                <div className="sm:flex sm:items-center">
                  <div className="sm:ml-4 sm:text-left text-center">
                    <p className="text-xl">Guilherme Cunha</p>
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
                    <p className="text-xl">Janaína Souza</p>
                    <p className="text-sm text-gray-600">Programador</p>

                  </div>
                </div>
              </div>
            </div>

            <div className=" lg:flex lg:items-center p-1 lg:p-2 xl:p-2">
              <div className="flex-grow bg-white shadow-xl rounded-md border-gray-300 p-2">
                <div className="sm:flex sm:items-center">
                  <div className="sm:ml-4 sm:text-left text-center">
                    <p className="text-xl">João Carvalho</p>
                    <p className="text-sm text-gray-600">Programador</p>

                  </div>
                </div>
              </div>
            </div>


            <div className=" lg:flex lg:items-center p-1 lg:p-2 xl:p-2">
              <div className="flex-grow bg-white shadow-xl rounded-md border-gray-300 p-2">
                <div className="sm:flex sm:items-center">
                  <div className="sm:ml-4 sm:text-left text-center">
                    <p className="text-xl">Naiara Neves</p>
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
                    <p className="text-xl">Ronaldo José</p>
                    <p className="text-sm text-gray-600">Programador</p>

                  </div>
                </div>
              </div>
            </div>




          </div>


        </session>
        <session className="faleconosco_session" id="fale-conosco">



          <div className="md:flex md:items-center">

            <h1 className="text-secondary text-center text-2xl sm:text-6xl" >Fale Conosco </h1>

          </div>



          <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-name">
                  Nome
                  </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-name" type="text" placeholder="Ex: Jane" />
                <p className="text-red-500 text-xs italic">
                  Por favor, preencha este campo.</p>
              </div>


              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
                  email
                  </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="text" placeholder="Ex: suporte@decoleapp.com" />
                <p className="text-red-500 text-xs italic">
                  Por favor, preencha este campo.</p>
              </div>
            </div>


            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-message">
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
                <button className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded inline-block text-sm px-4 py-2 leading-none border rounded text-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0" type="button">
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