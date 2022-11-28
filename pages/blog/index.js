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
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.grid}>
            {data.slice(0, 6).map((curElem) => {
              return (
                <Link key={curElem.id}  href={`/blog/${curElem.id}`}>
                  <div className={styles.card}>
                    <h3>{curElem.id}</h3>
                    <h2>{curElem.title}</h2>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default blog;

// http://localhost:3000/blog