import data from '../utils/data';
import Head from 'next/head';
import CommentTemplate from './components/CommentTemplate';

const commentsCard = () => {
  return (
    <>
      <Head>
        <title>Next-Comment</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className='grid grid-cols-1 gap-1 md:grid-cols-3 lg:grid-cols-4'>
        {data.comments.map((comment) => (
          // <CommentTemplate comment={comment} key={comment.id} />
          <div className='card' key={comment.id}>
            <h2 className='text-xl font-bold'>{comment.name}</h2>
            <h6 className='font-semibold'>Email: {comment.email}</h6>
            <p className="text-slate-300 font-light">{comment.body}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default commentsCard