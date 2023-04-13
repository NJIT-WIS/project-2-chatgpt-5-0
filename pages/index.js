import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import CookieBanner from "../components/cookieBanner"
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import React from 'react'
import ReactGA from 'react-ga';
import SubscribeForm from "../components/newsletter";



export default function Home() {

  return (
    <div className={utilStyles.container}>
      <Head>
        <title>MyWebClass.org</title>
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-CXE9WXQFQG"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CXE9WXQFQG');
          `,
        }}></script>
      </Head>

        <header className={utilStyles.header}>
    <nav className={utilStyles.navbar}>
      <ul className={utilStyles.navlist}>
        <li className={utilStyles.navitem}>
          <Link href="/" legacyBehavior>
            <a className={utilStyles.navlink}>MyWebClass</a>
          </Link>
        </li>
        <li className={utilStyles.navitem}>
          <Link href="/" legacyBehavior>
            <a className={utilStyles.navlink}>Home</a>
          </Link>
        </li>
        <li className={utilStyles.navitem}>
          <Link href="/courses" legacyBehavior>
            <a className={utilStyles.navlink}>Courses</a>
          </Link>
        </li>
        <li className={utilStyles.navitem}>
          <Link href="/about" legacyBehavior>
            <a className={utilStyles.navlink}>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  </header>

<main className={utilStyles.main}>
  <section className={utilStyles.hero}>
    <div className={utilStyles.heroTextContainer} style={{backgroundImage: `url(../../images/nelo_classroom.png)`}}>
      <div className={utilStyles.heroText}>
        <h1>Welcome to MyWebClass.Org!</h1>
        <p>Discover advanced technologies that will transform your teaching and their learning journey.</p>
        <Link href="/courses" legacyBehavior>
          <a className={utilStyles.button}>Explore Courses</a>
        </Link>
      </div>
    </div>
  </section>
</main>
<SubscribeForm/>
</div>
)
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}