import Head from 'next/head';
import { CMS_NAME } from '@constants';
import Layout from '@components/layout';
import Banner from '@components/banner';
import About from '@components/about';
import Counter from '@components/counter';
import Services from '@components/services';
import Skill from '@components/skill';
import Portfolio from '@components/portfolio';
import Testimonial from '@components/testimonial';
import Blog from '@components/blog';
import Contact from '@components/contact';
import '@styles/index.css';
import 'slick-carousel/slick/slick.css';

const index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Banner />
        <About />
        <Counter />
        <Services />
        <Skill />
        <Portfolio />
        <Testimonial />
        <Blog />
        <Contact />
      </Layout>
    </>
  );
};

export default index;
