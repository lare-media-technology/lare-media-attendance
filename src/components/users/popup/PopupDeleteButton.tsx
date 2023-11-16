import { Button, Icon, useDisclosure } from '@chakra-ui/react';
import { BsFillTrash3Fill } from 'react-icons/bs';

import DeleteConfirmation from '@/components/users/popup/DeleteConfirmation';

import { UserType } from '@/types/user';

interface PopupDeleteButtonProps {
	userData: UserType;
	refetch(): void;
}

const PopupDeleteButton: React.FC<PopupDeleteButtonProps> = ({
	userData,
	refetch
}) => {
	const disclosure = useDisclosure();

	return (
		<>
			<Button
				fontSize={{ base: '12px', md: '14px' }}
				color="white"
				fontWeight={600}
				bg="red.500"
				_hover={{ bg: 'tranparent' }}
				leftIcon={<Icon as={BsFillTrash3Fill} boxSize={4} />}
				onClick={() => disclosure.onOpen()}
			>
				Delete
			</Button>
			<DeleteConfirmation layoutDisclosure={disclosure} userData={userData} refetch={refetch} />
		</>
	);
};

export default PopupDeleteButton;
