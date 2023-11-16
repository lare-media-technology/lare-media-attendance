import {
	HStack,
	Icon,
	Stack,
	Text,
} from '@chakra-ui/react';
import { signOut } from 'next-auth/react';
import * as React from 'react';
import {
	IoLogOut,
	IoPerson,
} from 'react-icons/io5';

export interface TopBarProps {
	title: string;
	email: string | null | undefined;
}

const TopBar: React.FC<TopBarProps> = ({ title, email}) => {

	return (
		<HStack h="113px" w="full">
			<Stack mr="auto">
				<Text fontSize="24px" fontWeight={800} color='green.600'>
					{title}
				</Text>
			</Stack>
			<HStack gap={4}>
				<HStack>
					<Icon as={IoPerson} boxSize="18px" color="teal.600" />
					<Text fontSize="15px" fontWeight={700} color="teal.600" noOfLines={1}>
						{email}
					</Text>
				</HStack>
				<Icon as={IoLogOut} boxSize="24px" color="red.600" focusable={true} onClick={() => signOut()} />
			</HStack>
		</HStack>
	);
};

export default TopBar;
