import {
	Button,
	Flex,
	Icon,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	UseDisclosureReturn,
	useToast,
} from '@chakra-ui/react';
import * as React from 'react';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';

import { useDeleteUser } from '@/hooks/master_data/useUser';
import { useMutation } from '@tanstack/react-query';
import { UserType } from '@/types/user';

export interface DeleteConfirmationProps {
	layoutDisclosure: UseDisclosureReturn;
	userData: UserType;
	refetch(): void;
}

const DeleteConfirmation: React.FC<DeleteConfirmationProps> = ({
	layoutDisclosure,
	userData,
	refetch
}) => {
	const toast = useToast();

	const { mutateAsync, isLoading } = useMutation(useDeleteUser, {
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
					title: 'Delete user successfull',
					position: 'top',
					isClosable: true,
				})
				refetch()
				layoutDisclosure.onClose()
			}
		},
		onError: (error) => {
			console.error('Mutation error:', error);
		}
	});

	const handleDelete =  () => {
		mutateAsync(userData.uid);
	};

	return (
		<Modal
			isOpen={layoutDisclosure.isOpen}
			onClose={layoutDisclosure.onClose}
			size="xl"
			scrollBehavior="inside"
		>
			<ModalOverlay />
			<ModalContent rounded="md">
				<ModalHeader pb={0}>
					<Text fontSize="lg" fontWeight={700}>
						Delete user
					</Text>
				</ModalHeader>
				<ModalCloseButton />
				<ModalBody py={4} fontSize="14px">
					<Text>
						Are you sure delete this <Text as="b">user </Text>
						<Text as="b" textColor="red.500">
							{userData.email}
						</Text>
						?
					</Text>
				</ModalBody>
				<ModalFooter py={3}>
					<Flex w="full" justify="flex-end" gap={3}>
						<Button
							fontSize={{ base: '12px', md: '14px' }}
							fontWeight={600}
							color="orange.500"
							borderColor="orange.500"
							variant="outline"
							_hover={{ bg: 'tranparent' }}
							leftIcon={<Icon as={IoClose} boxSize={4} />}
							onClick={layoutDisclosure.onClose}
						>
							Cancel
						</Button>
						<Button
							type="submit"
							fontSize={{ base: '12px', md: '14px' }}
							color="white"
							fontWeight={600}
							bg="red.500"
							_hover={{ bg: 'tranparent' }}
							leftIcon={<Icon as={BsFillTrash3Fill} boxSize={4} />}
							onClick={handleDelete}
							isLoading={isLoading}
						>
							Sure, Delete
						</Button>
					</Flex>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default DeleteConfirmation;
