import React from 'react';
import Document, { Html, Head, NextScript, DocumentContext, DocumentInitialProps, Main } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): React.ReactElement {
    return (
      <Html lang="Pt-Br">
        <Head>
          
          <meta name="msapplication-TileColor" content="#18181b" />
          <meta name="theme-color" content="#F5D0FE" />
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
          <meta name="description" content="Site pessoal criado por Rafael Goncalves" />
          <title>Rafael</title>
          
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
