import { Box, Flex } from '@chakra-ui/react';
import Head from 'next/head';
import * as React from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import HeaderMain from '@/components/layouts/auth/components/HeaderMain';

export interface AuthAppLayoutProps {
	children: React.ReactNode;
	pageTitle?: string;
}

const AuthAppLayout: React.FC<AuthAppLayoutProps> = ({
	children,
	pageTitle = ' SFS DEMO',
}) => {
	const router = useRouter()
	const session = useSession({
		required: true,
		onUnauthenticated() {
			router.push('/login');
		},
	});

	return (
		<Box w="full" borderX="1px" borderColor="gray.300" h="100vh">
			<Head>
				<title>{pageTitle}</title>
			</Head>
			<main>
					<HeaderMain user={session?.data?.user}  />
					<Flex direction="column">
						<Flex flex="1">
							<Box width={{ base: 'full', md: '100%' }}>{children}</Box>
						</Flex>
					</Flex>
			</main>
		</Box>
	);
};

export default AuthAppLayout;
