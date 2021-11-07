import {useRouter} from 'next/router';

export default function Post() {
  const {query, asPath} = useRouter();

  return (
    <>
      <h1>Post {query.id}</h1>
      <p>{asPath}</p>
    </>
  )
}
