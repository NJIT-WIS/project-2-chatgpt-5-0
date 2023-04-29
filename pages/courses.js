import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Date from '../components/date'
import { useTranslation } from 'next-i18next'
import React from 'react'
import Link from 'next/link'
import ReactGA from 'react-ga';
import SubscribeForm from "../components/newsletter";

export default function Courses() {
  return (
    <div className={utilStyles.container}>
      <Head>
        <title>Courses</title>
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
        <h1 className={utilStyles.headingLg}>Courses</h1>
        <section>
          <h2 id="course1" className={utilStyles.headingMd}>Course 1: Mastering Modern Web Development with React, Next.js, and Node.js (Instructor: Christopher Christiansen)</h2>
          <p>In this comprehensive course, Christopher Christiansen will guide students through the world of modern web development using React, Next.js, and Node.js. Students will learn how to build dynamic, responsive web applications, leveraging the power of these popular JavaScript frameworks and libraries. Alongside front-end development, the course also delves into ChatGPT Prompt Engineering, demonstrating the potential of integrating AI-driven features into web applications. By the end of the course, students will have gained the expertise to create efficient, interactive, and AI-enhanced web applications that stand out in today's competitive digital landscape.</p>
        </section>
        <section>
        <h2 id="course2" className={utilStyles.headingMd}>Course 2: Crafting Visually Appealing and Accessible Web Applications (Instructor: D'Angelo Morales)</h2>
          <p>Join D'Angelo Morales in this exciting course that focuses on creating visually stunning and accessible web applications using HTML, CSS, and JavaScript. Students will learn the fundamental principles of web design and user experience, ensuring their creations are both aesthetically pleasing and inclusive. D'Angelo will cover essential techniques for creating responsive layouts, effective navigation, and engaging user interfaces. By the end of the course, students will be well-equipped to design web applications that are not only visually impressive but also cater to diverse audiences and accessibility needs.</p>
        </section>
        <section>
        <h2 id="course3" className={utilStyles.headingMd}>Course 3: Robust Web Applications: Databases, APIs, and Server-Side Optimization (Instructor: Keith Williams)</h2>
          <p>In this in-depth course, Keith Williams will help students master the intricacies of databases, APIs, server-side technologies, and CI/CD. Students will learn how to build and manage efficient databases, create and consume APIs, and optimize server-side performance for speed and reliability. Keith will also introduce continuous integration and continuous deployment (CI/CD) methodologies, ensuring students are well-versed in modern web development practices. By the end of the course, learners will have a strong foundation in back-end development and the skills required to create robust and reliable web applications.</p>
        </section>
      </main>
      <SubscribeForm/>
</div>
  )
}
