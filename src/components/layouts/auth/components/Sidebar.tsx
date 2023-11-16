import * as React from 'react';
import { Box, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, StackDivider, VStack } from '@chakra-ui/react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { DefaultSession } from "next-auth"

export interface SidebarProps {
	user: DefaultSession["user"] | null
	isOpen: boolean;
	onClose: () => void;
	sidebarRef: React.RefObject<HTMLInputElement>;
}

const Sidebar: React.FC<SidebarProps> = ({ user, isOpen, onClose, sidebarRef }) => {
	const handleLogout = async () => {
		await signOut({ redirect: false, callbackUrl: '/login' });
	};

	return (
		<Drawer placement='left' onClose={onClose} isOpen={isOpen} finalFocusRef={sidebarRef} useInert={false} >
			<DrawerOverlay />
			<DrawerContent >
				<DrawerHeader borderBottomWidth='1px'>Lare Attendance</DrawerHeader>
				<DrawerBody p="2">
					<VStack
						divider={<StackDivider borderColor='gray.200' />}
						align='stretch'
					>
						<Box>
							<Link href="#">{user && user?.name}</Link>
						</Box>
						<Box>
							<Link href="#" onClick={handleLogout}>Settings</Link>
						</Box>
						<Box>
							<Link href="#" onClick={handleLogout}> Logout</Link>
						</Box>
					</VStack>
				</DrawerBody>
			</DrawerContent>
		</Drawer>
	)
};

export default Sidebar;
