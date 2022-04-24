import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class HeadMeta extends Document {
    render () {
        return (
            <Html>
                <Head>
                    <meta name="description" content="Ekaterina Baliasnikova" />
                    <link rel="icon" href="/favicon.ico" />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin="anonymous"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Crimson+Pro&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
                        rel="stylesheet"
                    />
                    
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