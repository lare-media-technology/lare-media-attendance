import * as React from 'react';

import LandingPageMain from '@/components/landing_page/LandingPageMain';

import { NextPageWithLayout } from '@/pages/page';

const IndexPage: NextPageWithLayout = () => {
	return <LandingPageMain />;
};

IndexPage.getLayout = (page) => {
	return <>{page}</>;
};

export default IndexPage;
