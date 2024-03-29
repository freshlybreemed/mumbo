import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    return {
      html,
      head,
      errorHtml,
      chunks,
    };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <link rel="icon" type="image/x-icon" href="/static/img/mumbo.ico" />
          <link rel="stylesheet" href="/static/css/styles.css" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta charSet="utf-8" />
          <meta
            name="keywords"
            content="Mumbo Sauce, chicken and mumbo sauce, DMV music, chocolate city, DC maryland virginia, DC foodies"
          ></meta>
          <meta name="description" content="Clouty™: Rap, Reimagined" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="home" href="https://chickenandmumbosauce.com/" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://chickenandmumbosauce.com/static/img/crank-og-logo.png"
          />
          <meta property="og:url" content="http://chickenandmumbosauce.com/" />
          <meta property="og:site_name" content="Chicken & Mumbo Sauce" />
          <meta property="og:title" content="Chicken & Mumbo Sauce" />
          <meta
            property="og:description"
            content="Bridging the gap between DC culture, music and tech thru events, experiences and service."
          />
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:image"
            content="https://chickenandmumbosauce.com/static/img/crank-og-logo.png"
          />
          <meta name="twitter:site" content="@chickenNmumbo" />
          <meta name="twitter:title" content="Chicken & Mumbo Sauce" />
          <meta
            name="twitter:description"
            content="Bridging the gap between DC culture, music and tech thru events, experiences and service."
          />
          <meta name="twitter:creator" content="@chickenandmumbosauce" />
          <meta property="fb:app_id" content="1334983689990834" />
          <meta
            name="apple-mobile-web-app-title"
            content="Chicken & Mumbo Sauce"
          />
          <meta name="application-name" content="Chicken & Mumbo Sauce" />
          {/* <meta name="msapplication-TileColor" content="#e93d78"/> */}
          {/* <meta name="msapplication-TileImage" content="https://chickenandmumbosauce.com/img/mstile-144x144.png"/> */}
          <meta name="theme-color" content="#ffffff" />
          {/* <link rel="apple-touch-icon" sizes="57x57" href="img/apple-touch-icon-57x57.png"/>
                <link rel="apple-touch-icon" sizes="60x60" href="img/apple-touch-icon-60x60.png"/>
                <link rel="apple-touch-icon" sizes="72x72" href="img/apple-touch-icon-72x72.png"/>
                <link rel="apple-touch-icon" sizes="76x76" href="img/apple-touch-icon-76x76.png"/>
                <link rel="apple-touch-icon" sizes="114x114" href="img/apple-touch-icon-114x114.png"/>
                <link rel="apple-touch-icon" sizes="120x120" href="img/apple-touch-icon-120x120.png"/>
                <link rel="apple-touch-icon" sizes="144x144" href="img/apple-touch-icon-144x144.png"/>
                <link rel="apple-touch-icon" sizes="152x152" href="img/apple-touch-icon-152x152.png"/>
                <link rel="apple-touch-icon" sizes="180x180" href="img/apple-touch-icon-180x180.png"/> */}
          <link
            rel="icon"
            type="image/png"
            href="img/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="img/android-chrome-192x192.png"
            sizes="192x192"
          />
          <link
            rel="icon"
            type="image/png"
            href="img/favicon-96x96.png"
            sizes="96x96"
          />
          <link
            rel="icon"
            type="image/png"
            href="img/favicon-16x16.png"
            sizes="16x16"
          />
          <meta
            name="apple-mobile-web-app-title"
            content="Chicken & Mumbo Sauce"
          />
          <meta name="application-name" content="Chicken & Mumbo Sauce" />
        </Head>
        <body>
          <Main />

          <NextScript />
        </body>
      </html>
    );
  }
}
