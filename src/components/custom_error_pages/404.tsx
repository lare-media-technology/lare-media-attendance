import { Box, Center, Flex, Heading, Text, theme } from '@chakra-ui/react';

import ButtonLink from '@/components/utils/links/ButtonLink';

const Custom404 = () => {
	return (
		<Flex
			direction="column"
			justifyContent="center"
			alignItems="center"
			minHeight="100vh"
			bg={theme.colors.green[500]}
		>
			<Center mb="6">
				<Heading as="h1" fontSize="6xl" fontWeight="bold" color="white">
					404
				</Heading>
			</Center>
			<Text fontSize="2xl" fontWeight="semibold" color="white" mb="6">
				Page not found
			</Text>
			<Box textAlign="center" mb="6">
				<Text fontSize="lg" color="white">
					Sorry, page are you looking for not found, please go to main page.
				</Text>
			</Box>
			<ButtonLink
				href="/"
				buttonProps={{
					colorScheme: 'yellow',
					variant: 'solid',
				}}
			>
				Back
			</ButtonLink>
		</Flex>
	);
};

export default Custom404;
