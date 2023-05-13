import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en" data-bs-theme="dark">
                <Head>
                    <link rel="icon" href="/favicon.ico"/>
                    <link rel="apple-touch-icon" href="/logo192.png"/>
                    <link rel="manifest" href="/manifest.json"/>
                    <script src="/theme.js"></script>
                </Head>
                <body>
                    <noscript>You need to enable JavaScript to run this app.</noscript>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
