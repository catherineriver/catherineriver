import Document, { Html, Head, Main, NextScript } from 'next/document'

class HeadMeta extends Document {
    render () {
        return (
            <Html>
                <Head>
                    <meta name="description" content="Ekaterina Baliasnikova" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default HeadMeta