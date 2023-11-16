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
	VStack,
} from '@chakra-ui/react';
import { createTsForm } from '@ts-react/form';
import * as React from 'react';
import { ReactNode } from 'react';
import { IoClose, IoSaveOutline } from 'react-icons/io5';
import * as z from 'zod';

import TextField from '@/components/ts_form/text/TextField';

const mapping = [
	[z.string(), TextField] as const,
] as const;

interface FormContainerType {
	onSubmit: () => void;
	children: ReactNode;
	loading?: boolean;
	layoutDisclosure: UseDisclosureReturn;
	actionTitle: string;
}

const FormContainer = ({
	onSubmit,
	children,
	loading,
	layoutDisclosure,
	actionTitle,
}: FormContainerType) => {
	return (
		<Modal
			isOpen={layoutDisclosure.isOpen}
			onClose={layoutDisclosure.onClose}
			size="xl"
			scrollBehavior="inside"
		>
			<ModalOverlay />
			<ModalContent rounded="md">
				<form onSubmit={onSubmit}>
					<ModalHeader>
						<Text fontSize="lg" fontWeight={700}>
							{actionTitle} User
						</Text>
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody py={3} fontSize="14px">
						<VStack py={2} w="full">
							{children}
						</VStack>
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
								bg="green.500"
								_hover={{ bg: 'tranparent' }}
								leftIcon={<Icon as={IoSaveOutline} boxSize={4} />}
								isLoading={loading}
							>
								Save
							</Button>
						</Flex>
					</ModalFooter>
				</form>
			</ModalContent>
		</Modal>
	);
};

const UserForm = createTsForm(mapping, {
	FormComponent: FormContainer,
});

export default UserForm;
