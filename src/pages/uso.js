import Head from 'next/head';
import React, { useState, useRef } from 'react';
import Link from 'next/link';



export default function Uso() {




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

        <session className="first_sessionUso" id="inicio">
          <div >



            <h1 className="text-black text-center text-2xl sm:text-6xl" >Termo de Uso </h1>

          </div>

        </session>
        <session className="app_sessionUso p-6" id="app">


          <div>






            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">VISÃO GERAL</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Esse serviço é prestado por Decole. A título de esclarecimento os termos “nós”, “nos” e “nosso” se referem à equipe da Decole, assim como o termo “Produtos” se refere ao Aplicativo Decole e ao Site Decole, acessível através do domínio decole.app. A Decole proporciona o aplicativo Decole, incluindo todas as informações e ferramentas e serviços acessórios disponíveis para você, o cliente, com a condição da sua aceitação de todos os termos, condições, políticas e avisos declarados aqui.</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Ao contratar o acesso ao nosso aplicativo, você será atendido por nós. Consequentemente, você concorda com os seguintes termos e condições (“Termos de serviço”, “Termos”), incluindo os termos e condições e políticas adicionais mencionados neste documento e/ou outras plataformas. Esses Termos de serviço se aplicam a todos os nossos clientes.</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Por favor, leia estes Termos de serviço cuidadosamente antes de contratar nossos serviços. Ao contratar qualquer um de nossos serviços, você concorda com este documento.</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Quaisquer novos recursos ou ferramentas que forem adicionados ao aplicativo Decole também devem estar sujeitos aos Termos de serviço. </p>

            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">SEÇÃO 1 - TERMOS DE SERVIÇO</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Ao concordar com os Termos de serviço, você confirma que você é maior de idade em seu estado ou província de residência e que você nos deu seu consentimento para permitir que qualquer um dos seus dependentes menores de idade usem esse site.</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Você não deve usar nossos serviços para qualquer fim ilegal ou não autorizado. Você também não pode, ao usufruir deste Serviço, ou qualquer um de nossos Produtos, violar quaisquer leis em sua jurisdição (incluindo, mas não limitado, a leis de direitos autorais).</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Violar qualquer um dos Termos tem como consequência a rescisão imediata dos seus Serviços.</p>

            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">SEÇÃO 2 - CONDIÇÕES GERAIS</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Reservamos o direito de recusar o serviço a qualquer pessoa por qualquer motivo a qualquer momento.</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Você entende que o seu conteúdo (não incluindo informações de cartão de crédito), pode ser transferido sem criptografia e pode: (a) ser transmitido por várias redes; e (b) sofrer alterações para se adaptar e se adequar às exigências técnicas de conexão de redes ou dispositivos. As informações de cartão de crédito sempre são criptografadas durante a transferência entre redes.</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Você concorda em não reproduzir, duplicar, copiar, vender, revender ou explorar qualquer parte do Serviço e/ou Produtos, uso do Serviço e/ou Produtos, acesso ao Serviço e/ou Produtos, ou qualquer contato no site através do qual o serviço é fornecido, sem nossa permissão expressa por escrito.</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Os títulos usados neste acordo são incluídos apenas por conveniência e não limitam ou  afetam os Termos.</p>


            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">SEÇÃO 3 - PRECISÃO, INTEGRIDADE E ATUALIZAÇÃO DAS INFORMAÇÕES</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Não somos responsáveis por informações disponibilizadas nos nossos Produtos que não sejam precisas, completas ou atuais. O material dos nossos Produtos é fornecido apenas para fins informativos e não deve ser usado como a única base para tomar decisões sem consultar fontes de informações primárias, mais precisas, mais completas ou mais atuais. Qualquer utilização do material dos nossos Produtos  é por sua conta e risco.</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Nossos Produtos podem conter certas informações históricas. As informações históricas podem não ser atuais e são fornecidas apenas para sua referência. Reservamos o direito de modificar o conteúdo dos nossos Produtos a qualquer momento, mas nós não temos obrigação de atualizar nenhuma informação em nossos Produtos. Você concorda que é de sua responsabilidade monitorar alterações no nossos Produtos.</p>

            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">SEÇÃO 4 - MODIFICAÇÕES DO SERVIÇO E PREÇOS</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Os preços dos nossos Produtos são sujeitos a alterações sem notificação.</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Reservamos o direito de, a qualquer momento, modificar ou descontinuar um dos nossos Produtos (ou qualquer parte ou conteúdo do mesmo) sem notificação em qualquer momento.</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Não nos responsabilizados por você ou por qualquer terceiro por qualquer modificação, alteração de preço, suspensão ou descontinuação de qualquer um dos nossos Produtos.</p>


            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">SEÇÃO 6 - PRECISÃO DE INFORMAÇÕES DE FATURAMENTO E CONTA</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Reservamos o direito de recusar qualquer pedido que você nos fizer. Podemos, a nosso próprio critério, limitar ou cancelar qualquer um de nossos Produtos, por domicílio ou por pedido. Tais restrições podem incluir pedidos feitos na mesma conta de cliente, no mesmo cartão de crédito, e/ou pedidos que usam a mesma fatura e/ou endereço de envio. Caso façamos alterações ou cancelemos um pedido, pode ser que o notifiquemos por e-mail e/ou endereço/número de telefone de faturamento fornecidos no momento que o pedido foi feito. Reservamos o direito de limitar ou proibir pedidos que, a nosso critério exclusivo, parecem ser feitos por comerciantes, revendedores ou distribuidores.</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Você concorda em fornecer suas informações de conta e compra completas para todas as compras feitas em nossa loja. Você concorda em atualizar prontamente sua conta e outras informações, incluindo seu e-mail, números de cartão de crédito e datas de validade, para que possamos completar suas transações e contatar você quando preciso.</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Para mais detalhes, por favor, revise nossa Política de devolução.</p>

            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">SEÇÃO 7 - FERRAMENTAS OPCIONAIS</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Podemos te dar acesso a ferramentas de terceiros que não monitoramos e nem temos qualquer controle.</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Você reconhece e concorda que nós fornecemos acesso a tais ferramentas ”como elas são” e “conforme a disponibilidade” sem quaisquer garantias, representações ou condições de qualquer tipo e sem qualquer endosso. Não nos responsabilizamos de forma alguma pelo seu uso de ferramentas opcionais de terceiros.</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Qualquer uso de ferramentas opcionais oferecidas através dos nossos Produtos é inteiramente por sua conta e risco e você se familiarizar e aprovar os termos das ferramentas que são fornecidas por fornecedor(es) terceiro(s).</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Também podemos, futuramente, oferecer novos serviços e/ou recursos através dos nossos Produtos (incluindo o lançamento de novas ferramentas, recursos e outros produtos). Tais recursos, serviços e/ou produtos novos também devem estar sujeitos a esses Termos de serviço.</p>

            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">SEÇÃO 8 - LINKS DE TERCEIROS</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Certos produtos, conteúdos e serviços disponíveis em qualquer dos nossos Produtos podem incluir materiais de terceiros.</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Os links de terceiros nos nossos Produtos podem te redirecionar para sites e/ou aplicativos de terceiros que não são afiliados a nós. Não nos responsabilizamos por examinar ou avaliar o conteúdo ou precisão. Não garantimos e nem temos obrigação ou responsabilidade por quaisquer materiais ou sites de terceiros, ou por quaisquer outros materiais, produtos ou serviços de terceiros.</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Não somos responsáveis por quaisquer danos ou prejuízos relacionados com a compra ou uso de mercadorias, serviços, recursos, conteúdo, ou quaisquer outras transações feitas em conexão com quaisquer sites de terceiros. Por favor, revise com cuidado as políticas e práticas de terceiros e certifique-se que você as entende antes de efetuar qualquer transação. As queixas, reclamações, preocupações ou questões relativas a produtos de terceiros devem ser direcionadas ao terceiro.</p>

            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">SEÇÃO 9 - COMENTÁRIOS, FEEDBACK, ETC. DO USUÁRIO</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Se, a nosso pedido, você enviar certos itens específicos (por exemplo, participação em um concurso), ou sem um pedido nosso, você enviar ideias criativas, sugestões, propostas, planos, ou outros materiais, seja online, por e-mail, pelo correio, ou de outra forma (em conjunto chamados de 'comentários'), você concorda que podemos, a qualquer momento, sem restrição, editar, copiar, publicar, distribuir, traduzir e de outra forma usar quaisquer comentários que você encaminhar para nós. Não nos responsabilizamos por: (1) manter quaisquer comentários em sigilo; (2) indenizar por quaisquer comentários; ou (3) responder quaisquer comentários.</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Podemos, mas não temos a obrigação, de monitorar, editar ou remover conteúdo que nós determinamos a nosso próprio critério ser contra a lei, ofensivo, ameaçador, calunioso, difamatório, pornográfico, obsceno ou censurável ou que viole a propriedade intelectual de terceiros ou estes Termos de serviço.</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Você concorda que seus comentários não violam qualquer direito de terceiros, incluindo direitos autorais, marcas registradas, privacidade, personalidade ou outro direito pessoal ou de propriedade. Você concorda que os seus comentários não vão conter material difamatório, ilegal, abusivo ou obsceno. Eles também não conterão nenhum vírus de computador ou outro malware que possa afetar a operação do Serviço ou qualquer site relacionado. Você não pode usar um endereço de e-mail falso, fingir ser alguém diferente de si mesmo, ou de outra forma enganar a nós ou terceiros quanto à origem de quaisquer comentários. Você é o único responsável por quaisquer comentários que você faz e pela veracidade deles. Nós não assumimos qualquer responsabilidade ou obrigação por quaisquer comentários publicados por você ou por qualquer terceiro.</p>

            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">SEÇÃO 10 - INFORMAÇÕES PESSOAIS</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">O envio de suas informações pessoais através da loja é regido pela nossa Política de privacidade. Ver nossa Política de privacidade.</p>


            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">SEÇÃO 11 - ERROS, IMPRECISÕES E OMISSÕES</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Ocasionalmente, pode haver informações nos nossos Produtos que contém erros tipográficos, imprecisões ou omissões que possam relacionar-se a descrições de produtos, preços, promoções, ofertas, taxas de envio do produto, o prazo de envio e disponibilidade. Reservamos o direito de corrigir quaisquer erros, imprecisões ou omissões, e de alterar ou atualizar informações ou cancelar encomendas/pedidos caso qualquer informação nos nossos Produtos seja imprecisa, a qualquer momento e sem aviso prévio (até mesmo depois de você ter enviado o seu pedido/encomenda).</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Não assumimos nenhuma obrigação de atualizar, alterar ou esclarecer informações nos nossos Produtos, incluindo, sem limitação, a informações sobre preços, exceto conforme exigido por lei. Nenhuma atualização específica ou data de atualização nos nossos Produtos, deve ser utilizada para indicar que todas as informações dos nossos Produtos tenham sido modificadas ou atualizadas.</p>


            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">SEÇÃO 12 - USOS PROIBIDOS</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Além de outras proibições, conforme estabelecido nos Termos de serviço, você está proibido de usar nossos Produtos ou o conteúdo para: (a) fins ilícitos; (b) solicitar outras pessoas a realizar ou participar de quaisquer atos ilícitos; (c) violar quaisquer regulamentos internacionais, provinciais, estaduais ou federais, regras, leis ou regulamentos locais; (d) infringir ou violar nossos direitos de propriedade intelectual ou os direitos de propriedade intelectual de terceiros; (e) para assediar, abusar, insultar, danificar, difamar, caluniar, depreciar, intimidar ou discriminar com base em gênero, orientação sexual, religião, etnia, raça, idade, nacionalidade ou deficiência; (f) apresentar informações falsas ou enganosas; (g) fazer o envio ou transmitir vírus ou qualquer outro tipo de código malicioso que será ou poderá ser utilizado para afetar a funcionalidade ou operação do Serviço ou de qualquer site relacionado, outros sites, ou da Internet; (h) coletar ou rastrear as informações pessoais de outras pessoas; (i) para enviar spam, phishing, pharm, pretext, spider, crawl, ou scrape; (j) para fins obscenos ou imorais; ou (k) para interferir ou contornar os recursos de segurança do Serviço ou de qualquer site relacionado, outros sites, ou da Internet. Reservamos o direito de rescindir o seu uso de qualquer um dos nossos Produtos por violar qualquer um dos usos proibidos.</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl"></p>

            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">SEÇÃO 13 - ISENÇÃO DE RESPONSABILIDADE DE GARANTIAS; LIMITAÇÃO DE RESPONSABILIDADE</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Nós não garantimos, representamos ou justificamos que o seu uso dos nossos Produtos será pontual, seguro, sem erros ou interrupções.</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Não garantimos que os resultados que possam ser obtidos pelo uso dos nossos Produtos serão precisos ou confiáveis.</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Você concorda que de tempos em tempos, podemos remover nossos Produtos por períodos indefinidos de tempo ou cancelar a qualquer momento, sem te notificar.</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Você concorda que o seu uso ou incapacidade de usar nossos Produtos é por sua conta e risco. Todos os produtos entregues são, exceto conforme declarado por nós) fornecidos sem garantia e conforme a disponibilidade para seu uso, sem qualquer representação, garantias ou condições de qualquer tipo, expressas ou implícitas, incluindo todas as garantias implícitas ou condições de comercialização, quantidade, adequação a uma finalidade específica, durabilidade, título, e não violação.</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Em nenhuma circunstância o Decole, nossos diretores, oficiais, funcionários, afiliados, agentes, contratantes, estagiários, fornecedores, prestadores de serviços ou licenciadores serão responsáveis por qualquer prejuízo, perda, reclamação ou danos diretos, indiretos, incidentais, punitivos, especiais ou consequentes de qualquer tipo, incluindo, sem limitação, lucros cessantes, perda de receita, poupanças perdidas, perda de dados, custos de reposição, ou quaisquer danos semelhantes, seja com base em contrato, ato ilícito (incluindo negligência), responsabilidade objetiva ou de outra forma, decorrentes do seu uso dos nossos Produtos adquiridos, ou para qualquer outra reclamação relacionada de alguma forma ao seu uso dos nossos Produtos, incluindo, mas não limitado a, quaisquer erros ou omissões em qualquer conteúdo, ou qualquer perda ou dano de qualquer tipo como resultado do uso dos nossos Produtos ou qualquer conteúdo publicado, transmitido ou de outra forma disponível através do serviço, mesmo se alertado ​​de tal possibilidade. Como alguns estados ou jurisdições não permitem a exclusão ou a limitação de responsabilidade por danos consequentes ou incidentais, em tais estados ou jurisdições, a nossa responsabilidade será limitada à extensão máxima permitida por lei.</p>

            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">SEÇÃO 14 - INDENIZAÇÃO</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Você concorda em indenizar, defender e isentar Decole e nossos subsidiários, afiliados, parceiros, funcionários, diretores, agentes, contratados, licenciantes, prestadores de serviços, subcontratados, fornecedores, estagiários e funcionários, de qualquer reclamação ou demanda, incluindo honorários de advogados, por quaisquer terceiros devido à violação destes Termos de serviço ou aos documentos que incorporam por referência, ou à violação de qualquer lei ou os direitos de um terceiro.</p>

            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">SEÇÃO 15 - INDEPENDÊNCIA </p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">No caso de qualquer disposição destes Termos de serviço ser considerada ilegal, nula ou ineficaz, tal disposição deve, contudo, ser aplicável até ao limite máximo permitido pela lei aplicável, e a porção inexequível será considerada separada desses Termos de serviço. Tal determinação não prejudica a validade e aplicabilidade de quaisquer outras disposições restantes.</p>

            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">SEÇÃO 16 - RESCISÃO</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">As obrigações e responsabilidades das partes incorridas antes da data de rescisão devem continuar após a rescisão deste acordo para todos os efeitos.</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Estes Termos de Serviço estão em vigor, a menos que seja rescindido por você ou por nós. Você pode rescindir estes Termos de serviço a qualquer momento, notificando-nos que já não deseja utilizar os nossos Produtos.</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Se em nosso critério exclusivo você não cumprir com qualquer termo ou disposição destes Termos de serviço, nós também podemos rescindir este contrato a qualquer momento sem aviso prévio e você ficará responsável por todas as quantias devidas até a data da rescisão; também podemos lhe negar acesso a nossos Produtos(ou qualquer parte deles).</p>

            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">SEÇÃO 17 - ACORDO INTEGRAL</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Caso não exerçamos ou executamos qualquer direito ou disposição destes Termos de serviço, isso não constituirá uma renúncia de tal direito ou disposição.</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Estes Termos de serviço e quaisquer políticas ou normas operacionais postadas por nós em qualquer um dos nossos Produtos ou no que diz respeito aos nossos Produtos constituem a totalidade do acordo  entre nós. Estes termos regem o seu uso dos nossos Produtos, substituindo quaisquer acordos anteriores ou contemporâneos, comunicações e propostas, sejam verbais ou escritos, entre você e nós (incluindo, mas não limitado a quaisquer versões anteriores dos Termos de serviço).</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Quaisquer ambiguidades na interpretação destes Termos de serviço não devem ser interpretadas contra a parte que os redigiu. </p>

            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">SEÇÃO 18 - LEGISLAÇÃO APLICÁVEL</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Esses Termos de serviço e quaisquer acordos separados em que nós lhe fornecemos os Serviços devem ser regidos e interpretados de acordo com as leis de Salvador-BA, Brazil.</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl"></p>


            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">SEÇÃO 19 - ALTERAÇÕES DOS TERMOS DE SERVIÇO</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Você pode rever a versão mais atual dos Termos de serviço a qualquer momento nessa página.</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">Reservamos o direito, a nosso critério, de atualizar, modificar ou substituir qualquer parte destes Termos de serviço ao publicar atualizações e alterações nos nossos Produtos. É sua responsabilidade verificar essa página periodicamente. Seu uso contínuo ou acesso aos nossos Produtos após a publicação de quaisquer alterações a estes Termos de serviço constitui aceitação dessas alterações.</p>

            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">SEÇÃO 20 - INFORMAÇÕES DE CONTATO</p>
            <p className=" p-2 max-w-3xl m-1 flex justify-between text-secondary text-center text-justify text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl">As perguntas sobre os Termos de serviço devem ser enviadas para nós através do meajuda@decole.app</p>




          </div>
        </session>


      </main>


    </div >
  )
}