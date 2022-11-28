// import styles from '../../styles/Home.module.css'
import Image from 'next/image';
import styles from '../../styles/blogIndex.module.css'
import Navbar from '../components/Navbar.js'
import Head from 'next/head'
import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      data,
    },
  }
}

const blog = ({ data }) => {
  return (
    <>
      <Head>
        <title>Blogs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.main}>
        {data.slice(0, 5).map((curElem) => {
          return (
            <div key={curElem.id}>
              <h3>{curElem.id}</h3>
              <Link href={`/blog/${curElem.id}`}>
                <h2>{curElem.title}</h2>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default blog;

// http://localhost:3000/blog