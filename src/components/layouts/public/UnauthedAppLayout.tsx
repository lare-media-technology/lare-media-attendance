import { Box, Flex } from '@chakra-ui/react';
import Head from 'next/head';
import * as React from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import HeaderMain from '../auth/components/HeaderMain';

export interface AppLayoutProps {
	children: React.ReactNode;
	pageTitle?: string;
	overridePageTitle?: boolean;
	filename?: string;
}

const UnauthedAppLayout: React.FC<AppLayoutProps> = ({
	children,
	pageTitle = ' SFS DEMO',
}) => {
	const router = useRouter()
	const { status } = useSession();

	if(status === "authenticated") {
		router.push('/dashboard');
	}

	return (
		<Box w="full" borderX="1px" borderColor="gray.300" h="100vh">
			<Head>
				<title>{pageTitle}</title>
			</Head>
			<main>
					<HeaderMain user={null} />
					<Flex direction="column">
						<Flex flex="1">
							<Box width={{ base: 'full', md: '100%' }}>{children}</Box>
						</Flex>
					</Flex>
			</main>
		</Box>
	);
};

export default UnauthedAppLayout;
