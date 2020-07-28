import Head from 'next/head';
import React, { useState, useRef } from 'react';
import Link from 'next/link';




function Privacidade() {




  return (

    <div className="container">
      <Head>
        <title>Decole.app</title>
        <link rel="icon" href="/LogoCircle.svg" />
      </Head>

      <nav className="navbar">
        <div className="p-2 max-w-5xl m-auto flex justify-between items-center">



          <Link href='/'>
            <a
              href='/'
            >
              <img src="../decole_verdev2.svg" width={150} className="p-2 hidden md:inline-block" />
            </a>
          </Link>
          <Link href='/'>
            <a
              href='/'
            >
              <img src="../LogoCircle.svg" width={60} className="p-2 md:hidden inline-block" />
            </a>
          </Link>



        </div>

      </nav>


      <main>

        <session className="initDoc_session" id="inicio">
          <div >



            <h1 className="text-black text-center text-2xl sm:text-6xl" >POLÍTICA DE PRIVACIDADE – DECOLE </h1>

          </div>

        </session>
        <session className="doc_session p-6" id="app">





          <div>



            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">1. Garantir sua privacidade é um compromisso da Decole. Esta política de privacidade foi elaborada para explicar de maneira detalhada como as suas informações serão protegidas.
            A qualquer momento e sempre visando ao aprimoramento a prestação de serviços, a Decole poderá atualizar a Política de Privacidade.
</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Está política está em acordo com a Lei da Proteção de Dados Pessoais de 26 de outubro de 1998 (Lei n.º 67/98).</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">A Política de Privacidade poderá ser verificada sempre em https://decole.app/privacidade.</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Ao continuar utilizando os serviços, o USUÁRIO aceita os termos e condições de uso (TERMO) da Decole, bem como a Política de Privacidade. </p>

            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">2. Para cadastro na Decole, O cadastro de todos os USUÁRIOS será realizado com o preenchimento do Nome Completo/Razão social, CPF/CNPJ, Data de Nascimento/abertura e Endereço de E-mail pessoal/institucional da Empresa e/ou do seu Representante legal</p>

            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">3. É importante que o USUÁRIO mantenha suas informações pessoais atualizadas para que os dados dos sistemas da Decole sejam sempre verdadeiros e possamos contatá-lo efetivamente. A Decole não se responsabiliza pela veracidade dos dados fornecidos por seus USUÁRIOS, sendo tal veracidade de única e exclusiva responsabilidade destes.</p>



            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">4. A conta pessoal (física ou jurídica) criada na Decole contém informações pessoais e por isso é protegida por uma senha para garantir sua privacidade e segurança. Para impedir o acesso não autorizado à sua conta e às suas informações pessoais, escolha sua senha de forma adequada evitando utilizar sua própria data de nascimento, casamento ou similares que possam ser consideradas como senhas óbvias. O USUÁRIO é o único responsável pela guarda de sua senha de acesso ao APLICATIVO. Em caso de esquecimento, o USUÁRIO deverá solicitar uma nova senha por meio do APLICATIVO.</p>

            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">5. Com o único intuito de prestar o melhor serviço possível ao USUÁRIO, para garantir o bom funcionamento do APLICATIVO e nos limites permitidos pela legislação em vigor, a Decole coletará, armazenará e poderá transmitir ou disponibilizar a quaisquer terceiros os dados e informações fornecidos pelo USUÁRIO ao efetuar o cadastro no APLICATIVO, não se limitando às informações requeridas para cadastro no aplicativo ou site. </p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">5.1. A Decole poderá utilizar seus dados pessoais da seguinte maneira: </p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">a) Quando for realizada uma transação por meio do APLICATIVO, a Decole poderá utilizar informações referentes a essa transação e compartilhá-la com terceiros para que a transação seja bem-sucedida (ex.: gateways de pagamento, instituições bancárias, dentre outros); </p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">b) Para oferta de serviços, produtos ou notificações referentes ao APLICATIVO ou seus parceiros;</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">c) Para geração de informações agregadas, desenvolvimento de estudos e pesquisas referentes ao uso do APLICATIVO; </p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">d) Dados pessoais, anônimos ou agregados poderão ser compartilhados com terceiros parceiros da Decole para fins do bom funcionamento do APLICATIVO, tais como instituições bancárias que viabilizam as transações realizadas pelo APLICATIVO, servidores, redes sociais, dentre outros. (Não nos responsabilizamos pela política de privacidade ou conteúdo presente nesses mesmos sites)</p>

            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">5.2. A Decole também poderá divulgar suas informações pessoais para: </p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">a) cumprir uma ordem judicial ou outro processo legal, de acordo com os limites permitidos pela legislação em vigor; </p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">b)	cumprir requisitos legais, regulamentares ou administrativas de quaisquer autoridades governamentais; </p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">c)	proteger e defender o Centro de Desenvolvimento de Tecnologias de Gestão (FORNECEDOR), bem como seus administradores, diretores, funcionários, advogados, agentes, contratados e parceiros, em conexão com qualquer ação legal, reclamação ou disputa; </p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">d)	fazer cumprir os Termos de Uso da Decole;</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">e)	e, no caso em que suas ações no APLICATIVO violarem qualquer lei, os nossos Termos de Serviço, ou qualquer das nossas diretrizes de uso para produtos ou serviços fornecidos pela Decole. </p>


            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">6. A Decole utilizará os dados fornecidos por seus USUÁRIOS para: </p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">a)	Aprimoramento do serviço; </p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">b)	pesquisa interna de desenvolvimento,</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">c)	elaboração de dados estatísticos; </p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">d)	análise do comportamento de USUÁRIOS em geral e outras medições importantes para que sempre possa prestar um serviço de qualidade; </p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">e)	desenvolver dados anônimos e agregados, os quais poderão ser utilizados para fins econômicos. </p>


            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">7. Por meio das informações de contato do USUÁRIO, a Decole poderá enviar: </p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">a)	ações de marketing; </p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">b)	novidades do serviço;</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">c)	promoções,</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">d)	eventos; e,  </p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">e)	outras comunicações que entenderem necessárias. O USUÁRIO poderá cancelar o recebimento de notificações a qualquer momento por meio do endereço de e-mail para contato: suporte@decole.app</p>


            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">8. A Decole não se responsabiliza pelo uso indevido, por terceiros ou por outro USUÁRIO, das informações fornecidas por um USUÁRIO por meio do site ou aplicativo. A Decole, no entanto, implementa medidas que considera apropriadas para salvaguardar e ajudar a evitar o acesso, alteração, divulgação ou destruição sem autorização das informações coletadas. Caso o USUÁRIO considere ter suas informações utilizadas indevidamente por terceiros ou outro USUÁRIO e em desacordo com o presente TERMO, este deverá entrar em contato com a Decole por meio dos seguintes canais de comunicação: suporte@decole.app. A Decole analisará a reclamação e tomará as medidas que considerar cabíveis. </p>

            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">9. A Decole utiliza criptografia para receber, armazenar e transferir os dados de seus USUÁRIOS. Apesar disso, não é possível garantir a segurança de qualquer transmissão de dados pela internet. Por esta razão, a Decole não será responsável por quaisquer perdas de dados do USUÁRIO, inclusive decorrentes de caso fortuito, força maior, ocorridas em virtude de invasões ao SITE e quebra de segurança por parte de terceiros não autorizados. A Decole empenhará seus melhores esforços para garantir que informações pessoais não sejam acessadas por terceiros de maneira indevida e estranha a esta Política de Privacidade. </p>

            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">10. A transmissão de dados e informações por meio do APLICATIVO é feita pelo usuário por sua própria conta e risco. O usuário declara estar ciente dos riscos de uso de qualquer aplicação ou sistema computacional ou similar com acesso à internet. </p>

            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">11. A Decole pode alterar a presente Política de Privacidade sempre que julgar necessário. O usuário será notificado no caso de serem realizadas alterações significativas na maneira como a Decole utiliza informações pessoais de seus usuários. Os usuários estão vinculados a quaisquer alterações à Política de Privacidade, após terem sido publicadas e o usuário permanecer utilizando os serviços fornecidos pela Decole</p>



          </div>
        </session>


      </main>


    </div >
  )
}

Privacidade.getInitialProps = () => {
  console.log("Server side rendering!")
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default Privacidade