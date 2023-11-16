import { Button } from '@chakra-ui/react';
import { createTsForm } from '@ts-react/form';
import { ReactNode } from 'react';
import { z } from 'zod';

import TextField from '@/components/ts_form/text/TextField';

const mapping = [[z.string(), TextField] as const] as const;

interface FormContainer {
	onSubmit: () => void;
	children: ReactNode;
	loading?: boolean;
	isDisable?: boolean;
}

const FormContainer = ({ onSubmit, children, loading }: FormContainer) => {
	return (
		<>
			<form onSubmit={onSubmit}>
				{children}
				<Button
					mt={4}
					width="full"
					colorScheme="green"
					type="submit"
					isLoading={loading}
				>
					Sign in
				</Button>
			</form>
		</>
	);
};

const LoginForm = createTsForm(mapping, {
	FormComponent: FormContainer,
});

export default LoginForm;
