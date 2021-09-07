import React from 'react';
import Layout from '../components/Layout';
import Post from '../components/Post';
import { getAllPostsData, Posts } from '../lib/posts';

const BlogPage = ({ posts }: any) => {
  return (
    <Layout title='Blog'>
      <ul className='m-10'>
        {posts &&
          posts.map((post: Posts) => <Post key={post.id} post={post} />)}
      </ul>
    </Layout>
  );
};

export default BlogPage;

// サーバーサイドでビルド時に実行される
// export async function getStaticProps() {
//   const posts: {
//     userId: number;
//     id: number;
//     title: string;
//     body: string;
//   }[] = await axios.get(apiUrl).then((res) => res.data);
//   return {
//     props: { posts },
//   };
// }

export async function getStaticProps() {
  const posts = await getAllPostsData();
  return {
    props: { posts },
  };
}
