import { Button, Icon, useDisclosure, useToast } from '@chakra-ui/react';
import { FiEdit2 } from 'react-icons/fi';

import UserForm from '@/components/users/popup/UserForm';
import {
	userSchema,
	UserSchemaType,
} from '@/components/users/popup/UserSchema';

import { UserType } from '@/types/user';
import { useMutation } from '@tanstack/react-query';
import { useUpdateUser } from '@/hooks/master_data/useUser';
interface PopupEditButtonProps {
	userData: UserType;
	refetch(): void;
}

const PopupEditButton: React.FC<PopupEditButtonProps> = ({ userData, refetch }) => {
	const disclosure = useDisclosure();
	const toast = useToast();

	const { mutateAsync, isLoading } = useMutation(useUpdateUser, {
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
					title: 'Update user successfull',
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

	const handleSubmit = async (values: UserSchemaType) => {
		mutateAsync({ uid: userData.uid, ...values });
	};


	return (
		<>
			<Button
				fontSize={{ base: '12px', md: '14px' }}
				color="white"
				fontWeight={600}
				bg="orange.500"
				_hover={{ bg: 'tranparent' }}
				leftIcon={<Icon as={FiEdit2} boxSize={4} />}
				onClick={() => disclosure.onOpen()}
			>
				Change
			</Button>
			<UserForm
				schema={userSchema}
				onSubmit={handleSubmit}
				formProps={{
					layoutDisclosure: disclosure,
					actionTitle: 'Update',
					loading: isLoading
				}}
				defaultValues={{
					email: userData.email,
					displayName: userData.displayName,
					phoneNumber: userData.phoneNumber,
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
							placeholder: 'Input phone number, ex : 6281017232',
						},
					},
				}}
			/>
		</>
	);
};

export default PopupEditButton;
