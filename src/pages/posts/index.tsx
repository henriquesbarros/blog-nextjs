import { GetStaticProps } from "next"
import Link from 'next/link';

import SEO from "../../components/SEO";

import styles from './posts.module.scss'

interface Post {
  id: string;
  title: string;
}

interface PostsProps {
  posts: Post[];
}

export default function Posts() {
  return (
    <>
      <SEO title="Posts" excludeTitleSufix/>

      <main className={styles.container}>
        <div className={styles.posts}>
          <Link href='#'>
            <a>
              <time>14 de novembro de 2021</time>
              <strong>Título</strong>
              <p>Parágrafo</p>
            </a>
          </Link>
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
    return {
      props: {},
      revalidate: 60 * 60 * 12 // 12H
  }
}
