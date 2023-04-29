import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import CookieBanner from '../components/cookieBanner';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import React from 'react';
import ReactGA from 'react-ga';
import SubscribeForm from '../components/newsletter';

const isProd = process.env.NODE_ENV === 'production';

export default function Home() {
  return (
    <div className={utilStyles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CXE9WXQFQG"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CXE9WXQFQG', { page_path: window.location.pathname });
          `,
          }}
        ></script>
      </Head>

  <header className={utilStyles.header}>
    <nav className={utilStyles.navbar}>
      <ul className={utilStyles.navlist}>
        <li className={utilStyles.navitem}>
          <Link href="/" className={utilStyles.navlink}>
            MyWebClass
          </Link>
        </li>
        <li className={utilStyles.navitem}>
          <Link href="/" className={utilStyles.navlink}>
            Home
          </Link>
        </li>
        <li className={utilStyles.navitem}>
          <Link href="/instructors" className={utilStyles.navlink}>
            Instructors
          </Link>
        </li>
        <li className={utilStyles.navitem}>
          <Link href="/courses" className={utilStyles.navlink}>
            Courses
          </Link>
        </li>
         <li className={utilStyles.navitem}>
          <Link href="/goals" className={utilStyles.navlink}>
            Goals
          </Link>
        </li>
      </ul>
    </nav>
  </header>

<main className={utilStyles.main}>
  <section className={utilStyles.hero}>
  <div className={utilStyles.heroTextContainer} style={{
    background: `url(${
      isProd ? '/project-2-chatgpt-5-0' : ''
    }/images/nelo_classroom.png) no-repeat center center fixed`,
    backgroundSize: 'cover',
    backgroundPosition: '50% 0%',
  }}>
    <div className={utilStyles.heroText}>
      <h1>Now Recruiting!</h1>
      <p>Join MyWebClass.org as a tester to stay up-to-date with the latest web development technologies and enhance your teaching and their learning journey.</p>
      <Link href="/courses" className={utilStyles.button}>
        Learn more
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
