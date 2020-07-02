import Head from 'next/head'



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

            <div className="p-2 flex items-center">
              <a>Sobre</a>

              <a>Baixar</a>
            </div>
          </div>

        </nav>
        <session className="first_session">
          <div className="p-2">

            <h1 style={{ color: 'White', fontSize: 80 }}>Decole seu negócio no mundo digital! </h1>

          </div>

        </session>
        <session className="half_session" >
          <div>
            <h1>Oi</h1>
            <p>tesidoamsdpmasjdiasndmuiasjdmasuidajmsdpasdomsiodmsdokam,d,</p>
          </div>
        </session>
        <session className="half_session" style={{ backgroundColor: 'red' }}>
          Teste
        </session>
        <session className="faleconosco_session">



          <div class="md:flex md:items-center">
            <div class="md:w-1/3">

            </div>
            <br />
            <br />
            <div class="md:w-2/3">

              <h1 classeName="p-2" style={{ color: '#009688', fontSize: 30 }}>Fale</h1>

            </div>
            <div class="md:w-3/3">

              <h1 classeName="p-2" style={{ color: '#009688', fontSize: 30 }}>Conosco</h1>

            </div>
          </div>



          <form class="w-full max-w-lg">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-name">
                  Nome
                  </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-name" type="text" placeholder="Ex: Jane" />
                <p class="text-red-500 text-xs italic">
                  Por favor, preencha este campo.</p>
              </div>


              <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
                  email
                  </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="text" placeholder="Ex: suporte@decoleapp.com" />
                <p class="text-red-500 text-xs italic">
                  Por favor, preencha este campo.</p>
              </div>
            </div>


            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-message">
                  Messagem
                  </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-message" type="text" placeholder="Ex: sua opinião" />
                <p class="text-red-500 text-xs italic">
                  Por favor, preencha este campo.</p>
              </div>
            </div>

            <div class="md:flex md:items-center">
              <div class="md:w-1/3"></div>
              <div class=" btntext">
                <button class="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                  Enviar
            </button>
              </div>
            </div>



          </form>

        </session>
      </main>

      <footer className="p-2 footer_session">
        teste
      </footer>
    </div >
  )
}
