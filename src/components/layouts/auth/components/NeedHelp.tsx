import {
	Box,
	Button,
	Center,
	Icon,
	IconButton,
	Text,
} from '@chakra-ui/react';
import { useAtomValue } from 'jotai';
import * as React from 'react';
import { IoHelpCircle } from 'react-icons/io5';

import { openSideBar } from '@/store/sidebar';
import { useRouter } from 'next/router';

export interface NeedHelpProps {}

const NeedHelp: React.FC<NeedHelpProps> = () => {
	const isOpenSideBar = useAtomValue(openSideBar);
	const router = useRouter()

	if (isOpenSideBar) {
		return (
			<Box
				w="238px"
				h="185px"
				rounded="15px"
				bg="green.600"
				position="relative"
				py="17.47px"
				px="18px"
			>
				<Center shadow="sm" bg="white" w="38.21px" h="38.21px" rounded="12px">
					<Icon as={IoHelpCircle} boxSize="26.2px" color="green.600" />
				</Center>
				<Box position="absolute" bottom="18px">
					<Text fontSize="14px" fontWeight={700} color="white">
						Butuh Bantuan?
					</Text>
					<Text fontSize="12px" fontWeight={400} color="white">
						Silahkan cek dokumentasi
					</Text>
					<Button
						mt="10px"
						rounded="12px"
						w="203px"
						fontSize="10px"
						fontWeight={700}
						color="gray.700"
						onClick={() => router.push('/')}
					>
						DOKUMENTASI
					</Button>
				</Box>
			</Box>
		);
	}

	return (
		<IconButton
			aria-label="Dokumentasi"
			shadow="sm"
			bg="white"
			w="38.21px"
			h="38.21px"
			rounded="12px"
			icon={<Icon as={IoHelpCircle} boxSize="26.2px" color="green.600" />}
		/>
	);
};

export default NeedHelp;
