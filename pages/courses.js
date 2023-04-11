import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Date from '../components/date'
import { useTranslation } from 'next-i18next'
import React from 'react'
import Link from 'next/link'

export default function Courses() {
  return (
    <div className={utilStyles.container}>
      <Head>
        <title>Courses | MyWebClass.org</title>
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
        <h1 className={utilStyles.headingLg}>Courses</h1>
        <section>
          <h2 id="course1" className={utilStyles.headingMd}>Course 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo mauris eget ante bibendum vehicula. Suspendisse potenti. Sed auctor nulla non orci finibus, non varius tellus suscipit. Aenean ut sapien dolor. Proin rutrum libero quis magna blandit aliquet. Vestibulum eleifend risus id sapien feugiat, ut tincidunt est dictum. Nunc id metus at nunc lobortis semper. </p>
          <p>Quisque auctor, dolor eu fringilla iaculis, risus massa venenatis nulla, in scelerisque ex purus vitae odio. Nam rutrum tincidunt lacus vel pharetra. Aliquam erat volutpat. Morbi maximus posuere tellus, in bibendum turpis viverra id. Nunc sit amet augue sed orci hendrerit bibendum. Nam vitae ante ante. Integer pellentesque enim lectus, quis ultrices lorem vestibulum vel. Sed lobortis mauris id euismod pharetra. Donec eu quam in lorem sodales imperdiet at non nunc. Fusce venenatis, lorem eget tristique posuere, lorem ante dignissim nisl, a tempor velit augue at mauris. </p>
          <p>Nunc tristique, enim non laoreet sodales, risus magna pharetra sapien, at posuere lacus dolor eget ex. Donec eget orci sed nulla scelerisque egestas.</p>
        </section>
        <section>
        <h2 id="course2" className={utilStyles.headingMd}>Course 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo mauris eget ante bibendum vehicula. Suspendisse potenti. Sed auctor nulla non orci finibus, non varius tellus suscipit. Aenean ut sapien dolor. Proin rutrum libero quis magna blandit aliquet. Vestibulum eleifend risus id sapien feugiat, ut tincidunt est dictum. Nunc id metus at nunc lobortis semper. </p>
        </section>
        <section>
        <h2 id="course3" className={utilStyles.headingMd}>Course 3</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo mauris eget ante bibendum vehicula. Suspendisse potenti. Sed auctor nulla non orci finibus, non varius tellus suscipit. Aenean ut sapien dolor. Proin rutrum libero quis magna blandit aliquet. Vestibulum eleifend risus id sapien feugiat, ut tincidunt est dictum. Nunc id metus at nunc lobortis semper. </p>
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
