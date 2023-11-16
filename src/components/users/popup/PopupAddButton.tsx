import React from 'react';
import { Button, Icon, useDisclosure, useToast } from '@chakra-ui/react';
import { IoAdd } from 'react-icons/io5';

import UserForm from '@/components/users/popup/UserForm';
import {
	userNewSchema,
	UserNewSchemaType,
} from '@/components/users/popup/UserSchema';
import { useMutation } from '@tanstack/react-query';
import { useCreateUser } from '@/hooks/master_data/useUser';

interface PopupAddButtonProps {
	refetch(): void;
}

const PopupAddButton: React.FC<PopupAddButtonProps> = ({
	refetch
}) => {
	const disclosure = useDisclosure();
	const toast = useToast();

	const { mutateAsync, isLoading } = useMutation(useCreateUser, {
		onSuccess: (data) => {
			if (data.error) {
				toast({
					status: 'error',
					title: data.error.message,
					position: 'top',
					isClosable: true,
				})
			} else {
				toast({
					status: 'success',
					title: 'Create user successfull',
					position: 'top',
					isClosable: true,
				})
				refetch()
				disclosure.onClose()
			}
		},
		onError: (error) => {
			console.error('Mutation error:', error);
		}
	});

	const handleSubmit = async (values: UserNewSchemaType) => {
		mutateAsync(values);
	};


	return (
		<>
			<Button
				fontSize={{ base: '12px', md: '14px' }}
				color="white"
				fontWeight={600}
				bg="green.500"
				_hover={{ bg: 'tranparent' }}
				leftIcon={<Icon as={IoAdd} boxSize={4} />}
				onClick={() => disclosure.onOpen()}
			>
				Create
			</Button>
			<UserForm
				schema={userNewSchema}
				onSubmit={handleSubmit}
				formProps={{
					layoutDisclosure: disclosure,
					actionTitle: 'Insert',
					loading: isLoading
				}}
				defaultValues={{
					email: '',
					displayName: '',
					phoneNumber: '',
				}}
				props={{
					email: {
						label: 'Email',
						inputProps: {
							placeholder: 'Input email address, ex : marco@mail',
						},
					},
					displayName: {
						label: 'Name',
						inputProps: {
							placeholder: 'Input name, ex : Marco',
						},
					},
					phoneNumber: {
						label: 'Phone Number',
						inputProps: {
							placeholder: 'Input phone number, ex : +6288173566622',
						},
					},
					password: {
						label: 'Password',
						inputProps: { placeholder: 'Input password' },
					},
					confirmation_password: {
						label: 'Confirmation Password',
						inputProps: { placeholder: 'Input confirmation password' },
					},
				}}
			/>
		</>
	);
};

export default PopupAddButton;
