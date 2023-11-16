import * as React from 'react';
import { Box, Button, Flex, Heading, IconButton, Spacer, useColorMode, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon, MoonIcon } from '@chakra-ui/icons';
import { DefaultSession } from "next-auth"
import Sidebar from './Sidebar';


export interface HeaderMainProps {
	pageTitle?: string;
	user: DefaultSession["user"] | null
}

const HeaderMain: React.FC<HeaderMainProps> = React.memo(({
	pageTitle = 'Lare Attendance',
	user = null
}) => {
	const sidebarRef : React.RefObject<HTMLInputElement> = React.createRef()
	const { colorMode, toggleColorMode } = useColorMode()

	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<Box h="16" w="full" bg={colorMode == 'light' ? 'gray.300' : 'gray.700'}>
			<Flex>
				<Box p='4' >
					<Flex gap='2'>
						{user && <Button
							ref={sidebarRef}
							as={IconButton}
							icon={<HamburgerIcon />}
							variant='outline'
							onClick={onOpen}
						/>}
						<Sidebar user={user} isOpen={isOpen} onClose={onClose} sidebarRef={sidebarRef} />
						<Heading >{pageTitle}</Heading>
					</Flex>
				</Box>
				<Spacer />
				<Box p='4' >
					<MoonIcon boxSize={6} color={colorMode === 'light' ? 'light' : 'dark'} onClick={toggleColorMode} />
				</Box>
			</Flex >
		</Box >
	);
});

export default HeaderMain;
