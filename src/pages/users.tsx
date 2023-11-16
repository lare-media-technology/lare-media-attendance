'use client';
import * as React from 'react';

import AuthAppLayout from '@/components/layouts/auth/AuthAppLayout';
import UserMain from '@/components/users/UserMain';

import { NextPageWithLayout } from '@/pages/page';

const User: NextPageWithLayout = () => {
	return <UserMain />;
};

User.getLayout = (page) => {

	return (
		<AuthAppLayout pageTitle="User">
			{page}
		</AuthAppLayout>
	);
};

export default User;
