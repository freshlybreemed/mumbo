import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        const {
            html, head, errorHtml, chunks,
        } = renderPage();
        return {
            html, head, errorHtml, chunks
        };
    }

    render(){
        return (
            <html lang="en">
              <Head>
              <title>Crank Karaoke</title>
                <link rel="icon" type="image/x-icon" href="/static/img/drum_WjI_icon.ico" />
                <link rel="stylesheet" href="/static/css/styles.css" />
                {/* <link rel="stylesheet" href="/static/css/normalize.css" /> */}
              </Head>
              <body>
                  <Main />
                  
                  <NextScript />
              </body>
            </html>
        )
    }
}
