import React from 'react';
import Link from 'next/link';
import Router from 'next/router';



class Nav extends React.Component {
  countLinks = 0;

  constructor(props) {
    super(props);
    this.state = {
      navCollapsed: false,
      linksAnimated: false,
      sideBar: false,
      countLinks: 0,
    };
  }

  navCollapsedButtonHandleClick() {
    this.countLinks = 0;
    this.setState(() => ({
      navCollapsed: !this.state.navCollapsed,
      linksAnimated: !this.state.navCollapsed,
      sideBar: !this.state.navCollapsed,
    }));
  }

  componentDidMount() {}

  componentWillUnmount() {}

  renderNavbarLink(name, href) {
    const { sideBar } = this.state;
    const html = (
      <li>
        <Link href={href}>
            <a
              id="nameNav"
              href={href}
              style={{
              animation: sideBar === true ? `navLinkFade 0.5s ease forwards ${this.countLinks / 7 + 1.0}s` : '',
            }}

              onClick={() => {
            if (sideBar === true) this.navCollapsedButtonHandleClick();
            }}
            >
                {name}
            </a>
        </Link>
      </li>
      
);
    

    this.countLinks += 1;

    return html;
  }

  renderLogoutIcon(){
    const { sideBar } = this.state;
    const html = (
      <li>
        <a 
        style={{
          animation: sideBar === true ? `navLinkFade 0.5s ease forwards ${this.countLinks / 7 + 1.0}s` : '',
          
        }}
        
        onClick={() => {
                Router.push('/login');
        }}
        >
        <i id="logout-button" className="fa fa-sign-in-alt" aria-hidden="true"></i>
        
        </a>

      </li>
      
);
    

    this.countLinks += 1;

    return html;
  }

  render() {
    return (
      <>
        <nav>
          <div className="nav-logo">
            <Link  href='/'>
              <a href='/'>
            <div className="logo" id="logoNav">
                            <img id="imgNav" alt="Ícone" src="/favicon.png" />
                        </div>
              </a>
            </Link>
          </div>
          
          <ul
            className={`nav-links${
              this.state.sideBar === true ? ' nav-active' : ''
            }`}
          >
            {this.renderNavbarLink('Inicio', '/')}
            {this.renderNavbarLink('Produtos', '/admin/produtos')}
            {this.renderNavbarLink('Parâmetros', '/admin/parametros')}
            {this.renderNavbarLink('Operadores', '/admin/operadores')}
            {this.renderNavbarLink('Clientes', '/admin/clientes')}


            {this.renderLogoutIcon()}
          </ul>
          <div
            className={`nav-collapsed-button${
              this.state.navCollapsed === true ? ' nav-collapse-toggle' : ''
            }`}
            onClick={() => this.navCollapsedButtonHandleClick()}
          >
            <div className="collapse-line-one" />
            <div className="collapse-line-two" />
            <div className="collapse-line-three" />
          </div>
        </nav>

        <style global jsx>{`
          nav {
            /* Fix on top */
            position: fixed;
            top: 0;
            width: 100%;

            display: flex;
            justify-content: space-around;
            align-items: center;
            min-height: 8vh;
            background-color: var(--navbar-bg-color);
            z-index: 100;
            color: var(--navbar-text-color);
          }
          .nav-logo {
            text-transform: uppercase;
            letter-spacing: 5px;
            font-size: 18px;
          }
          .nav-logo a {
            color: var(--navbar-text-color);
            text-decoration: none;
          }
          .nav-logo h2 {
            color: var(--navbar-text-color);
          }
          .nav-links {
            display: flex;
            justify-content: space-around;
            width: 30%;
          }
          .nav-links li {
            list-style: none;
          }
          
          .nav-links a:hover {
            filter: brightness(150%);
          }

          .nav-collapsed-button {
            display: none;
            cursor: pointer;
          }
          .nav-collapsed-button div {
            background-color: var(--navbar-text-color);
            width: 25px;
            height: 3px;
            margin: 5px;
            transition: all 0.3s ease;
          }

          @media screen and (max-width: 1024) {
            .nav-links {
              width: 60%;
            }
          }

          @media screen and (max-width: 768px) {
            .nav-links {
              position: fixed;
              right: 0;
              height: 92vh;
              top: 8vh;
              background-color: var(--navbar-bg-color);
              display: flex;
              flex-direction: column;
              align-items: center;
              width: 50%;
              transform: translateX(100%);
              transition: transform 0.5s ease-in;
            }
            .nav-links li a {
              opacity: 0;
            }
            .nav-collapsed-button {
              display: block;
            }
          }
          .nav-active {
            transform: translateX(0%);
          }
          @keyframes navLinkFade {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0px);
            }
          }

          .nav-collapse-toggle .collapse-line-one {
            transform: rotate(-45deg) translate(-5px, 6px);
          }
          .nav-collapse-toggle .collapse-line-two {
            opacity: 0;
          }
          .nav-collapse-toggle .collapse-line-three {
            transform: rotate(45deg) translate(-5px, -6px);
          }

          #logout-button {
            cursor: pointer;
          }
          .nav nameNav{

            color: white;
          }
            
          @media only screen and (max-device-width: 1080px) {
            
              .nav-links a {
                
                letter-spacing: 3px;
                
                font-size: 14px;
              }    
             
            }
            .nav-links a {
              color: var(--navbar-text-color);
              text-decoration: none;
              font-weight: bold;
            }
          
        `}</style>
      </>
    );
  }
}

export default Nav;
