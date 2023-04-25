/** write about goals **/
import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import ReactGA from 'react-ga';
import SubscribeForm from "../components/newsletter";

const isProd = process.env.NODE_ENV === 'production';

export default function About() {
  const { t } = useTranslation('common')

  return (
    <div className={utilStyles.container}>
      <Head>
        <title>Goals</title>
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
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1>Embracing the Future of Online Learning: MyWebClass.org</h1>
        <section>
          <p>As the world becomes increasingly interconnected, online learning platforms have emerged as powerful tools for delivering quality education to people worldwide. One such platform, MyWebClass.org, is dedicated to teaching revolutionary and cutting-edge industry standards in web development, while integrating up-and-coming technologies like AI. This groundbreaking curriculum aims to revolutionize the online learning experience by keeping students at the forefront of innovation in the tech industry.
As we explore the MyWebClass.org project, we can identify two main goals that underpin its mission:</p>
        </section>
        <section>
        <h2 id="instructor2">Goal 1: Deliver Cutting-Edge Education in Web Development and AI Technologies</h2>
          <p>MyWebClass.org is dedicated to providing students with a comprehensive and up-to-date education in web development, incorporating the latest industry standards and best practices. The curriculum not only covers traditional web development topics but also delves into the integration of AI technologies, giving students a well-rounded understanding of the ever-evolving tech landscape. By staying at the forefront of innovation, MyWebClass.org prepares students for successful careers in the dynamic world of web development and artificial intelligence.</p>
          </section>
        <section>
        <h2 id="instructor3">Goal 2: Seek Beta Testers to Refine the Groundbreaking Curriculum</h2>
          <p>To ensure the quality and effectiveness of its revolutionary approach, MyWebClass.org is actively seeking volunteers to participate as beta testers. These individuals will have the opportunity to experience the cutting-edge curriculum firsthand, providing invaluable feedback and insights to help shape the future of online learning. By involving beta testers, MyWebClass.org aims to create a more refined and impactful learning experience that will ultimately benefit a wider audience of students eager to learn web development and AI technologies.</p>
        </section>
      </section>
      </main>
        <SubscribeForm/>
    </div>
  )
}
