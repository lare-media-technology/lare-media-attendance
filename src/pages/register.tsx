import * as React from 'react';

import UnauthedAppLayout from '@/components/layouts/public/UnauthedAppLayout';
import RegisterMain from '@/components/register/RegisterMain';

import { NextPageWithLayout } from '@/pages/page';

const RegistersPage: NextPageWithLayout = () => {
	return <RegisterMain />;
};

RegistersPage.getLayout = (page) => {
	return (
		<UnauthedAppLayout pageTitle="Register">
			{page}
		</UnauthedAppLayout>
	);
};

export default RegistersPage;
