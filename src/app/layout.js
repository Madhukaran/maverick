import Script from 'next/script'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Maverick',
  description: 'Maverick Cricket',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
        async
        crossOrigin="anonymous"
        strategy="lazyOnload"
        src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1252367313612803'
      />
      <body className={inter.className}>{children}</body>
    </html>
  )
}

{/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1252367313612803"
     crossorigin="anonymous"></script>
<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-1252367313612803"
     data-ad-slot="1209202670"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script> */}