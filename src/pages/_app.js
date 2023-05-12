import React from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="theme-color" content="#000000"/>
                <meta
                    name="description"
                    content="Web site created using create-react-app"
                />
                <title>React Index</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp