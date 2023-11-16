import { Button, Center, Link, Text } from '@chakra-ui/react';
import { createTsForm } from '@ts-react/form';
import { ReactNode } from 'react';
import { z } from 'zod';

import TextField from '@/components/ts_form/text/TextField';

const mapping = [[z.string(), TextField] as const] as const;

interface FormContainerType {
	onSubmit: () => void;
	children: ReactNode;
	loading?: boolean;
	isDisable?: boolean;
}

const FormContainer = ({ onSubmit, children, loading }: FormContainerType) => {
	return (
		<>
			<form onSubmit={onSubmit}>
				<Text fontSize={28} align="center" color="green.600" fontWeight={900}>Sign Up</Text>
				{children}
				<Button
					mt={4}
					width="full"
					colorScheme="green"
					type="submit"
					isLoading={loading}
				>
					Sign Up
				</Button>
			</form>
			<Center py={2} fontSize="sm">
				<Text color="gray.600" mr={1}>
					You have account?
				</Text>
				<Link color="green.600" href="/login" fontWeight={700}>
					Sign in
				</Link>
			</Center>
		</>
	);
};

const RegisterForm = createTsForm(mapping, {
	FormComponent: FormContainer,
});

export default RegisterForm;
