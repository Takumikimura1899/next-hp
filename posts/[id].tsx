import Link from 'next/link';
import Layout from '../components/Layout';
import { getAllPostIds, getPostData } from '../lib/posts';

export async function getStaticPaths() {
  const paths = await getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const { post: post } = await getPostData(params.id);
  return {
    props: {
      post,
    },
  };
}
