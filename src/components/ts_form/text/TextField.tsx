import {
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	InputProps,
} from '@chakra-ui/react';
import { useTsController } from '@ts-react/form';
import React from 'react';

import { BaseFieldProps } from '@/components/ts_form/types/base_field_props';

interface TextFieldProps extends BaseFieldProps {
	inputProps?: InputProps | undefined;
	paddingTop?: string;
}

const TextField = ({
	label,
	inputProps,
	isDisabled,
	isRequired,
	paddingTop,
}: TextFieldProps) => {
	const {
		field: { onChange, value },
		error,
	} = useTsController<string>();

	return (
		<FormControl isInvalid={!!error} pt={paddingTop ?? 1}>
			<FormLabel>{label}</FormLabel>
			<Input
				{...inputProps}
				w="100%"
				disabled={isDisabled !== undefined && 'true'}
				onChange={(event) => {
					onChange(event.target.value);
				}}
				value={value ?? ''}
				required={isRequired}
				type={label === 'Password' || label === 'Confirmation Password' ? 'password' : 'text'}
				color="gray.700"
				_hover={{ borderColor: 'green.700' }}
			/>
			<FormErrorMessage>{error?.errorMessage}</FormErrorMessage>
		</FormControl>
	);
};

export default TextField;
