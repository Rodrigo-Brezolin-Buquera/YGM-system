import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
         <Head>
             <title>Yoga Mangala</title>
             <meta name="description" content="Studio Yoga Mangala" />
             <meta name="viewport" content="width=device-width, initial-scale=1" />
             <link rel="icon" href="/favicon.ico" />
         </Head> 
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
