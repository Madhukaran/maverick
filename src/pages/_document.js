import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/vercel.svg"></link>
                <meta name="theme-color" content="#fff" />
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1252367313612803"
                    crossOrigin="anonymous"></script>
                <script>
                    (adsbygoogle = window.adsbygoogle || []).push({ });
                </script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}