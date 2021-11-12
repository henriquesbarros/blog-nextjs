import { GetServerSideProps } from "next";
import SEO from "../components/SEO";

interface Post {
  id: string;
  title: string;
}

interface HomeProps {
  posts: Post[];
}

export default function Home({posts}: HomeProps) {
  return (
    <>
      <SEO title="Home" excludeTitleSufix/>
      <h1>Post</h1>
      <ul>
        {posts.map(({id, title}) => (
          <li key={id}>Título: {title}</li>
        ))}
      </ul>
    </>
  )
}

// Esse método é chamado antes do componente ser renderizado.
// O node que atua na camada intermediária é quem executa esta função.
export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await fetch('http://localhost:3333/posts');
  const posts = await response.json();

  return {
    props: {
      posts
    }
  }
}
