import { Code, Image, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import * as React from 'react';

const LandingPageBody = () => {
	return (
		<VStack spacing={2} align="center" mb={6} mt={3}>

			<Text fontSize={{ base: '', md: '24px' }} color="gray.600">
				Welcome to Lare Media Attendance Application
			</Text>
			<Text fontSize={{ base: '1.5rem', md: '40px' }} textAlign="left" fontWeight="bold">
				Getting Started
			</Text>

			<Text color="gray.500" pt={[2, 6]} fontSize={14}>
				After that, you can enter login to appplication at <Link href="/login"><Code colorScheme='green' >/login</Code></Link> with data was your input
			</Text>
			<Image
				src="/images/login.png"
				alt="Login page"
				minWidth="400px"
				h="full"
				objectFit="cover"
			/>
			<Text color="gray.500" pt={[2, 6]} fontSize={14}>
				After you login, you can enter to users page to handle contact/user existing
			</Text>
		</VStack>
	);
};

export default LandingPageBody;
