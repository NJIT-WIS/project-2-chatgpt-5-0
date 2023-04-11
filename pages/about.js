import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import ReactGA from 'react-ga';
import SubscribeForm from "../components/newsletter";

export default function About() {
  const { t } = useTranslation('common')

  return (
    <div className={utilStyles.container}>
      <Head>
        <title>{t('About')} | MyWebClass.org</title>
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
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1 className={utilStyles.headingXl}>{t('About MyWebClass.Org')}</h1>

       <div className={utilStyles.imageContainer}>
  <div className={utilStyles.image}>
    <img src="/images/comic.png" alt="Image 1" />
    <div className={utilStyles.buttonContainer}>
      <button className={`${utilStyles.button} slideToSection`} onClick={() => {document.getElementById("instructor1").scrollIntoView();}}>Instructor 1</button>
    </div>
  </div>
  <div className={utilStyles.image}>
    <img src="/images/comic.png" alt="Image 2" />
    <div className={utilStyles.buttonContainer}>
      <button className={utilStyles.button} onClick={() => {document.getElementById("instructor2").scrollIntoView({ behavior: 'smooth' });}}>Instructor 2</button>
    </div>
  </div>
  <div className={utilStyles.image}>
    <img src="/images/comic.png" alt="Image 3" />
    <div className={utilStyles.buttonContainer}>
      <button className={utilStyles.button} onClick={() => {document.getElementById("instructor3").scrollIntoView({ behavior: 'smooth' });}}>Instructor 3</button>
    </div>
  </div>
</div>




        <h1>Meet The Instructors</h1>
        <section>
          <h2 id="instructor1">Chris - Full Stack Developer</h2>
           <p>Chris specializes in React, Next.js, and Node.js. He loves solving complex problems and creating efficient solutions.</p>
        </section>
        <section>
        <h2 id="instructor2">D'Angelo - Front-end Developer</h2>
          <p>D'Angelo is an expert in HTML, CSS, and JavaScript. He's passionate about creating visually appealing and accessible web applications.</p>
        </section>
        <section>
        <h2 id="instructor3">Keith - Back-end Developer</h2>
          <p>Keith is skilled in databases, APIs, and server-side technologies. He enjoys optimizing back-end systems for speed and reliability.</p>
        </section>
      </section>
      </main>
        <SubscribeForm/>
    </div>
  )
}
