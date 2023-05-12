import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en" data-bs-theme="dark">
                <Head>
                    <link rel="icon" href="%PUBLIC_URL%/favicon.ico"/>
                    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png"/>
                    <link rel="manifest" href="%PUBLIC_URL%/manifest.json"/>
                    <script src="colorModeToggler.js"></script>
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
