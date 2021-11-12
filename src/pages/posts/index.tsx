import { GetStaticProps } from "next"

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
