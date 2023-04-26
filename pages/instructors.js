import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import ReactGA from 'react-ga';
import SubscribeForm from "../components/newsletter";

const isProd = process.env.NODE_ENV === 'production';

export default function Instructors() {
  const { t } = useTranslation('common')

  return (
    <div className={utilStyles.container}>
      <Head>
        <title>Instructors</title>
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
        <h1 className={utilStyles.headingXl}>{t('Instructors')}</h1>

       <div className={utilStyles.imageContainer}>
 <div className={utilStyles.image} style={{ width: '1100px', height: '400px', overflow: 'hidden', marginTop: '75px' }}>
  <img
    src={`${isProd ? '/project-2-chatgpt-5-0' : ''}/images/chris.jpg`}
    alt="Image 1"
    style={{ objectFit: 'cover', width: '100%', height: '70%' }}
  />
  <div className={utilStyles.buttonContainer}>
    <button
      className={`${utilStyles.button} slideToSection`}
      onClick={() => {
        document.getElementById('instructor1').scrollIntoView({ behavior: 'smooth' });;
      }}
    >
      Instructor 1
    </button>
  </div>
</div>
 <div className={utilStyles.image} style={{ width: '1100px', height: '400px', overflow: 'hidden', marginTop: '75px' }}>
  <img
    src={`${isProd ? '/project-2-chatgpt-5-0' : ''}/images/chris.jpg`}
    alt="Image 1"
    style={{ objectFit: 'cover', width: '100%', height: '70%' }}
  />
  <div className={utilStyles.buttonContainer}>
    <button
      className={utilStyles.button}
      onClick={() => {
        document.getElementById('instructor2').scrollIntoView({ behavior: 'smooth' });
      }}
    >
      Instructor 2
    </button>
  </div>
</div>
 <div className={utilStyles.image} style={{ width: '1100px', height: '400px', overflow: 'hidden', marginTop: '75px' }}>
  <img
    src={`${isProd ? '/project-2-chatgpt-5-0' : ''}/images/chris.jpg`}
    alt="Image 1"
    style={{ objectFit: 'cover', width: '100%', height: '70%' }}
  />
  <div className={utilStyles.buttonContainer}>
    <button
      className={utilStyles.button}
      onClick={() => {
        document.getElementById('instructor3').scrollIntoView({ behavior: 'smooth' });
      }}
    >
      Instructor 3
    </button>
  </div>
</div>

</div>




        <h1>Meet the talented instructors at MyWebClass.org, who bring their expertise and passion to our cutting-edge curriculum:</h1>
        <section>
          <h2 id="instructor1">Christopher Christiansen</h2>
           <p>Christopher Christiansen is a highly skilled instructor specializing in React, Next.js, and Node.js, with a strong focus on ChatGPT Prompt Engineering. Chris loves tackling complex problems and devising efficient solutions, and his enthusiasm for sharing his knowledge is truly contagious. Students can expect to learn the intricacies of front-end frameworks and AI-driven applications under his expert guidance.</p>
        </section>
        <section>
        <h2 id="instructor2">D'Angelo Morales</h2>
          <p>D'Angelo Morales is an accomplished web developer with a wealth of experience in HTML, CSS, and JavaScript. As an instructor, D'Angelo is passionate about creating visually stunning and accessible web applications, and he's eager to share his insights with students. Under D'Angelo's tutelage, learners will master the art of crafting beautiful and functional user interfaces that cater to diverse audiences.</p>
        </section>
        <section>
        <h2 id="instructor3">Keith Williams</h2>
          <p>Keith Williams brings his expertise in databases, APIs, server-side technologies, and CI/CD to the MyWebClass.org team. Keith enjoys optimizing back-end systems for speed and reliability, ensuring seamless user experiences. As an instructor, he shares his knowledge of efficient data management and server-side optimization with students, equipping them with the skills needed to build robust and reliable web applications.</p>
        </section>
      </section>
      </main>
        <SubscribeForm/>
    </div>
  )
}
