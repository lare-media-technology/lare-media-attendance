import * as React from 'react';

import UnauthedAppLayout from '@/components/layouts/public/UnauthedAppLayout';
import LoginMain from '@/components/login/LoginMain';

import { NextPageWithLayout } from '@/pages/page';

const IndexPage: NextPageWithLayout = () => {
	return <LoginMain />;
};

IndexPage.getLayout = (page) => {
	return <UnauthedAppLayout>{page}</UnauthedAppLayout>;
};

export default IndexPage;
