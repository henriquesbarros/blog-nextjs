import { GetStaticProps } from "next"
import SEO from "../../components/SEO";

interface Post {
  id: string;
  title: string;
}

interface PostsProps {
  posts: Post[];
}

export default function Posts({posts}: PostsProps) {
  return (
    <>
      <SEO title="Posts" excludeTitleSufix/>
      <h1>Post</h1>
      <ul>
        {posts.map(({id, title}) => (
          <li key={id}>Título: {title}</li>
        ))}
      </ul>
    </>
  )
}

export const getStaticProps: GetStaticProps<PostsProps> = async () => {
  const response = await fetch('http://localhost:3333/posts');
  const posts = await response.json();

  return {
    props: {
      posts
    },
    revalidate: 5 // Em segundos
  }
}
