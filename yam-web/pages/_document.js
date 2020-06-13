import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
            crossOrigin="anonymous"
          />
        </Head>
        <body data-spy="scroll" data-target="#navbarYagnesh" data-offset="98">
          <Main />
          <script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js" />
          <NextScript />
        </body>
      </Html>
    );
  }
}
