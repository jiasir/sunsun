import React from 'react'
import Head from 'next/head'
import Header from "./header";
import Footer from "./footer";

class MyApp extends React.Component<{ Component: any, pageProps: any }> {
    render(): JSX.Element {
        let {Component, pageProps} = this.props;
        return (
            <>
                <Head>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <meta name="theme-color" content="#000000"/>
                    <meta
                        name="sunsun"
                        content="The sunsun website"
                    />
                    <title>sunsun</title>
                </Head>

                {/*col responsive global settings*/}
                <div className="d-flex flex-column min-vh-100">
                    <Header/>
                    <Component {...pageProps} />
                    <Footer/>
                </div>
            </>
        )
    }
}

export default MyApp