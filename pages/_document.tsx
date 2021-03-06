import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render(): JSX.Element{
      return(
          <Html lang="en">
            <Head>
            <link href="https://fonts.googleapis.com/css2?family=Lora:wght@500;700&family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
            </Head>
            <body>
                    <Main/>
                    <NextScript />
                </body>
          </Html>
      )
  }
}

export default MyDocument