import Head from 'next/head';
import { CMS_NAME } from '@constants';
import Layout from '@components/layout';
import Banner from '@components/Banner';
import Technologies from '@components/Technologies';
import WorkExperience from '@components/WorkExperience';
import Certificates from '@components/Certificates';
import Education from '@components/Education';
import Achievements from '@components/Achievements';

import useResumePage from '../hooks/useResumePage';

const Resume = () => {
  const { data, error } = useResumePage();

  if (error) return <div>failed to load</div>;

  return (
    <Layout footerStyle={{ marginTop: 0, paddingTop: 50 }}>
      <Head>
        <title>Next.js Blog Example with {CMS_NAME}</title>
      </Head>
      <Banner data={data?.resumePage} />
      <Technologies data={data?.skills} />
      <Certificates data={data?.certifications} />
      <Achievements data={data?.achievements} />
      <WorkExperience data={data?.workExperiences} />
      <Education data={data?.educationDetails} />
    </Layout>
  );
};

Resume.displayName = 'HomePage';

export default Resume;
