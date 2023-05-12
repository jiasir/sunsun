import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en" data-bs-theme="dark">
                <Head>
                    <meta charSet="utf-8"/>
                    <link rel="icon" href="%PUBLIC_URL%/favicon.ico"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <meta name="theme-color" content="#000000"/>
                    <meta
                        name="description"
                        content="Web site created using create-react-app"
                    />
                    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png"/>
                    <link rel="manifest" href="%PUBLIC_URL%/manifest.json"/>
                    <script src="colorModeToggler.js"></script>
                    <title>React Index</title>
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
