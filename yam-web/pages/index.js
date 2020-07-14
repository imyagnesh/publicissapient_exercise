import Head from 'next/head';
import { CMS_NAME } from '@constants';
import Layout from '@components/layout';
import Banner from '@components/Banner';
import About from '@components/About';
import Counter from '@components/Counter';
import Services from '@components/Services';
import Skill from '@components/Skill';
import Portfolio from '@components/Portfolio';
import Testimonial from '@components/Testimonial';
import Blog from '@components/Blog';
import Contact from '@components/Contact';

import useHomePage from '../hooks/useHomePage';

const Index = () => {
  const { data, error } = useHomePage();

  if (error) return <div>failed to load</div>;

  const dynamicFields = (data?.homePage.dynamicFields || []).reduce((p, c) => {
    // eslint-disable-next-line no-underscore-dangle
    switch (c.__typename) {
      case 'ComponentHomePageServices':
        return { ...p, services: c };
      case 'ComponentHomePageSkills':
        return { ...p, skills: c };
      case 'ComponentHomePagePortfolio':
        return { ...p, portfolio: c };
      case 'ComponentHomePageTestimonial':
        return { ...p, testimonial: c };

      default:
        return p;
    }
  }, {});

  return (
    <Layout footerStyle={{ marginTop: 0 }}>
      <Head>
        <title>Next.js Blog Example with {CMS_NAME}</title>
      </Head>
      <Banner data={data?.homePage.home} />
      <About data={data?.homePage.aboutMe} />
      <Counter data={data?.homePage.counter} />
      <Services data={dynamicFields?.services} />
      <Skill data={dynamicFields?.skills} />
      <Portfolio data={dynamicFields?.portfolio} />
      <Testimonial data={dynamicFields?.testimonial} />
      <Blog data={data?.homePage.blog} />
      {/* <Contact data={data?.homePage.ContactMe} /> */}
    </Layout>
  );
};

Index.displayName = 'HomePage';

export default Index;
