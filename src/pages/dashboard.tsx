'use client';
import * as React from 'react';

import AuthAppLayout from '@/components/layouts/auth/AuthAppLayout';

import { NextPageWithLayout } from '@/pages/page';
import DashboardMain from '@/components/dashboard/DashboardMain';

const User: NextPageWithLayout = () => {
	return <DashboardMain />;
};

User.getLayout = (page) => {

	return (
		<AuthAppLayout pageTitle="Dashboard">
			{page}
		</AuthAppLayout>
	);
};

export default User;
