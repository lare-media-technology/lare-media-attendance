import {
	Flex,
	HStack,
	Icon,
	Input,
	InputGroup,
	InputLeftElement,
	Text,
	useToast,
} from '@chakra-ui/react';
import * as React from 'react';
import { IoSearch } from 'react-icons/io5';

import PopupAddButton from '@/components/users/popup/PopupAddButton';
import { useQueryClient } from '@tanstack/react-query';
import { limit } from '@/store/main';
import { fetchUsers } from '@/hooks/master_data/useUser';


interface UserHeaderProps {
	refetch(): void;
	setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const UserHeader: React.FC<UserHeaderProps> = ({
	refetch,
	setSearchValue
}) => {
	const [inputValue, setInputValue] = React.useState<string>('');
	const queryClient = useQueryClient();
	const toast = useToast();
	const handleKeyPress = (event: React.KeyboardEvent) => {
		const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

		if (event.key === 'Enter') {
			if (!emailPattern.test(inputValue) && inputValue !== '') {
				toast({
					status: 'warning',
					title: 'Invalid email format',
					position: 'top',
					isClosable: true,
				})
				return false
			}

			queryClient.prefetchQuery({
				queryKey: ['users', null],
				queryFn: () => fetchUsers({
					nextPageToken: null,
					limit: limit,
					search: inputValue
				}),
			})
			setSearchValue(inputValue)
		}
	};

	return (
		<Flex
			flexDir={{ base: 'row', md: 'row', sm: 'column' }}
			justifyContent="space-between"
			alignItems={{ base: 'flex-start', md: 'center' }}
			mb={6}
		>
			<HStack gap={6} >
				<Text fontSize="lg" fontWeight={700}>
					User
				</Text>
				<InputGroup w={{ base: '100%', md: '308px', sm: '100%' }}>
					<InputLeftElement width="2.5rem">
						<Icon as={IoSearch} color="gray.600" boxSize={4} />
					</InputLeftElement>
					<Input
						type="search"
						fontSize="xs"
						placeholder="Search by email address"
						bg="gray.100"
						color="gray.600"
						value={inputValue}
						onKeyDown={handleKeyPress}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
					/>
				</InputGroup>
			</HStack>
			<HStack gap={4}>
				<PopupAddButton refetch={refetch} />
			</HStack>
		</Flex>
	);
};

export default UserHeader;
