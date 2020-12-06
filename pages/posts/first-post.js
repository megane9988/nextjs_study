import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/first-post.module.scss'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
    <Head>
      <title>ahahahaah</title>
    </Head>
    <div>
      <h1 className={styles.h1}>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </div>
    </Layout>
  )
}