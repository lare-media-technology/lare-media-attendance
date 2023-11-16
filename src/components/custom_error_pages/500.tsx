import {
	Box,
	Button,
	Center,
	Flex,
	Heading,
	Text,
	theme,
} from '@chakra-ui/react';
import { signOut } from 'next-auth/react';

function clearSiteDataAndReload() {

	// Clear localStorage
	if (typeof Storage !== 'undefined' && localStorage) {
		try {
			localStorage.clear();
		} catch (error) {
			console.error('Error clearing localStorage:', error);
		}
	} else {
		console.error('localStorage is not supported in this browser.');
	}

	// Clear sessionStorage
	if (typeof Storage !== 'undefined' && sessionStorage) {
		try {
			sessionStorage.clear();
		} catch (error) {
			console.error('Error clearing sessionStorage:', error);
		}
	} else {
		console.error('sessionStorage is not supported in this browser.');
	}

	// Force logout the site
	signOut({ callbackUrl: '/login' });
}

const Custom500 = () => {
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
					Internal Server Error
				</Heading>
			</Center>
			<Text fontSize="2xl" fontWeight="semibold" color="white" mb="6">
				Sorry, an occured error in the server
			</Text>
			<Box textAlign="center" mb="6">
				<Text fontSize="lg" color="white">
					Please following click button to reload page, if any problem you can contact administrator.
				</Text>
			</Box>
			<Button
				colorScheme="yellow"
				variant="solid"
				onClick={clearSiteDataAndReload}
			>
				Reload
			</Button>
		</Flex>
	);
};

export default Custom500;
