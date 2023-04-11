import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { useTranslation } from 'next-i18next'
import React from 'react'
import ReactGA from 'react-ga';


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
    <div className={utilStyles.heroTextContainer} style={{backgroundImage: `url(/images/nelo_classroom.png)`}}>
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




     <footer className={`${utilStyles.flex} ${utilStyles.justifyBetween} ${utilStyles.itemsCenter} ${utilStyles.py4} ${utilStyles.bgGray}`}>
      <div className={`${utilStyles.flex} ${utilStyles.flexCol} ${utilStyles.w50} ${utilStyles.mr4}`}>
        <h3 className={`${utilStyles.mb2}`}>Subscribe to our Newsletter</h3>
        <form>
          <label htmlFor="email" className={`${utilStyles.mb2}`}>Email:</label>
          <input type="email" id="email" name="email" className={`${utilStyles.wFull} ${utilStyles.p2} ${utilStyles.mb4} ${utilStyles.border} ${utilStyles.borderGray} ${utilStyles.rounded}`} required />
          <button type="submit" className={utilStyles.button}>Subscribe</button>
        </form>
      </div>
      <div className={`${utilStyles.flex} ${utilStyles.itemsCenter}`}>
        <a href="#" className={`${utilStyles.mr2} ${utilStyles.textGray}`}>Facebook</a>
        <a href="#" className={`${utilStyles.mr2} ${utilStyles.textGray}`}>Twitter</a>
        <a href="#" className={`${utilStyles.textGray}`}>Instagram</a>
      </div>
    </footer>
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