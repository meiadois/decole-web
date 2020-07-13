import App from 'next/app'
import '../styles/main.css'
import Header from '../components/header/Header'
import styled from 'styled-components';
//import Burger from '../components/sidebar/Burger';
import Nav from '../components/sidebar/Navbar';
import React from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <>

      <Component {...pageProps} />
    </>);
}
// <!--Header title="decole" /-->
// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp