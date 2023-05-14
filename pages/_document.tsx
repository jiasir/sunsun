import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render(): JSX.Element {
        return (
            // When theme.js was enabled, the data-bs-theme is not working anymore
            <Html lang="en" data-bs-theme="dark">
                <Head>
                    {/*favicon generated by https://favicon.io/favicon-generator/*/}
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                    <link rel="manifest" href="/manifest.json" />
                    <script src="/theme.js"></script>
                </Head>
                <body>
                    <noscript>You need to enable JavaScript to run this app.</noscript>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
