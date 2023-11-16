import { Box } from '@chakra-ui/react';
import * as React from 'react';

import LandingPageBody from '@/components/landing_page/LandingPageBody';
import HeaderMain from '@/components/layouts/auth/components/HeaderMain';

const LandingPageMain = (): JSX.Element => {
	return (
		<Box>
			<HeaderMain user={null} />
			<Box>
				<Box maxW="1442px" mx="auto" px={[4, 24]}>
					<LandingPageBody />
				</Box>
			</Box>
		</Box>
	);
};

export default LandingPageMain;
