import { AbsoluteCenter, Box, Button, Center, Divider, Link, Text, useColorMode, useToast } from '@chakra-ui/react';
import * as React from 'react';

import LoginForm from '@/components/login/LoginForm';
import { LoginSchema, loginSchema } from '@/components/login/LoginSchema';
import { signIn } from 'next-auth/react';
import { FaGoogle } from "react-icons/fa6";

export interface LoginMainProps { }

const LoginMain: React.FC<LoginMainProps> = () => {
	const toast = useToast();
	const { colorMode } = useColorMode()

	const handleLoginSubmit = (values: LoginSchema) => {
		// eslint-disable-next-line
		console.log(values)
		toast({
			title: 'You have successfully logged in',
			position: 'top',
			isClosable: true,
		})
	};

	return (
		<>
			<Box
				h="full"
				w="full"
				display="flex"
				alignItems="center"
				flexDirection="column"
				mt="6"
			>
				<Box w="full" p="6">
					<Text fontSize={28} align="center" color="green.600" fontWeight={900}>Sign In</Text>
					<Text fontSize={14} align="center" fontWeight={700}>Input your email and password to sign in</Text>
					<LoginForm
						schema={loginSchema}
						onSubmit={handleLoginSubmit}
						defaultValues={{
							email: '',
							password: '',
						}}
						props={{
							email: {
								label: 'Email',
								inputProps: { placeholder: 'Input your email address' },
							},
							password: {
								label: 'Password',
								inputProps: { placeholder: 'Input your password' },
							},
						}}
					/>
					<Center py={5}>
						<span style={{ marginRight: '0.5rem' }}>Don't have account?</span>
						<Link color="green.600" href="/register" fontWeight={700}>
							Sign up
						</Link>
					</Center>
					<Box position='relative' padding='2'>
						<Divider />
						<AbsoluteCenter bg={colorMode === 'light' ? 'white' : '#1A202C'} px='4'>
							Social Login
						</AbsoluteCenter>
					</Box>
					<Center py={5}>
						<Button w="full" leftIcon={<FaGoogle />} onClick={() => signIn('google')}>Sign in with Google</Button>
					</Center>
				</Box>
			</Box>
		</>
	);
};

export default LoginMain;
