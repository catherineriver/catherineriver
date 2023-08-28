import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class HeadMeta extends Document {
    render () {
        return (
            <Html>
                <Head>
                    <meta name="description" content="Ekaterina Baliasnikova | Front-end developer" />
                    <meta name="msapplication-TileColor" content="#00aba9" />
                    <meta name="theme-color" content="#ffffff" />
                    <meta property="og:title" content="Ekaterina Baliasnikova | Front-end developer" />
                    <meta property="og:description" content="Let's work together!" />
                    <meta property="og:image" content="https://harnault.dev/images/og-image.jpg" />
                    <meta property="og:image:type" content="image/jpg" />
                    <meta name="twitter:image" content="https://harnault.dev/images/og-image.jpg" />
                    <meta name="twitter:image:type" content="image/jpg" />
                    <meta property="og:type" content="website" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="manifest" href="/site.webmanifest" />
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#a1a2cc" />
                        <link rel="icon" href="/favicon.ico" />
                        <link
                            rel="preconnect"
                            href="https://fonts.gstatic.com"
                            crossOrigin="anonymous"
                        />
                        <link
                            href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;700&display=swap"
                            rel="stylesheet"
                        />
                        <link
                            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&&display=swap"
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