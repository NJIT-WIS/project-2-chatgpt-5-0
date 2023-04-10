import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { useTranslation } from 'next-i18next'

export default function Home({ allPostsData }) {
  const { t } = useTranslation()

  return (
    <Layout home>
      <Head>
        <title>{t('site-title')}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>{t('introduction')}</p>
        <p>
          ({t('sample-website')}{' '}
          <a href="https://nextjs.org/learn">{t('nextjs-tutorial')}</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>{t('blog-title')}</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
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
