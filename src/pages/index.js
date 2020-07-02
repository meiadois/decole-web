import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <nav className="navbar">

        </nav>
        <session className="first_session" style={{backgroundColor: 'black'}}>
          Teste
        </session>
        <session className="half_session" style={{backgroundColor: 'blue'}}>
          <div>
            <h1>Oi</h1>
          </div>
        </session>
        <session className="half_session" style={{backgroundColor: 'red'}}>
          Teste
        </session>
        <session className="fullscreen_session" style={{backgroundColor: 'yellow'}}>
          Teste
        </session>
      </main>

      <footer>
        
      </footer>
    </div>
  )
}
