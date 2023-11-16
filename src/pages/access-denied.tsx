import * as React from 'react';

import AccessDeniedComponent from '@/components/layouts/auth/AccessDenied';
import AuthAppLayout from '@/components/layouts/auth/AuthAppLayout';

import { NextPageWithLayout } from '@/pages/page';

const MainLetterPage: NextPageWithLayout = () => {
	return <AccessDeniedComponent />;
};

export default MainLetterPage;

MainLetterPage.getLayout = (page) => {
	return <AuthAppLayout pageTitle="Access Denied">{page}</AuthAppLayout>;
};
