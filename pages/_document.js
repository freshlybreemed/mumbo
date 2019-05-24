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
                <meta property="og:image" content="/static/img/graph.png" />
                <link rel="icon" type="image/x-icon" href="/static/img/mumbo.ico" />
                <link rel="stylesheet" href="/static/css/styles.css" />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <script src="https://js.stripe.com/v3/"></script>

                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
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
