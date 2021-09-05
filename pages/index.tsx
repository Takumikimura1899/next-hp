import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout title='Home'>
      <p className='text-4xl'>Hello Next.js</p>
    </Layout>
  );
};

export default Home;
