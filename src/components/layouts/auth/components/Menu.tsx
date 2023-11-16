import { Box, Center, HStack, Icon, Text } from '@chakra-ui/react';
import { useAtomValue } from 'jotai';
import * as React from 'react';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';

import BaseLink from '@/components/utils/links/BaseLink';

import { openSideBar } from '@/store/sidebar';

import { SidebarMenu } from '@/types/menus';

export interface MenuProps {
	menu: SidebarMenu;
	deep: number;
}

interface DetailMenuProps {
	menu: SidebarMenu;
	isActive: boolean;
	hasIcon: boolean;
	isOpenSideBar: boolean;
	deep: number;
	showSubMenu: boolean;
}

const DetailMenu = ({
	menu,
	isActive,
	hasIcon,
	isOpenSideBar,
	deep,
	showSubMenu,
}:
DetailMenuProps) => {
	return (
		<HStack
			bg={isActive && hasIcon ? 'white' : undefined}
			shadow={isActive && hasIcon ? 'sm' : undefined}
			py={hasIcon ? '12px' : '8px'}
			px={isOpenSideBar ? '20px' : '15px'}
			rounded="15px"
		>
			<Box w="30px" ml={`${deep * 15}px`}>
				{hasIcon && (
					<Center
						w="30px"
						h="30px"
						rounded="12px"
						bg={isActive ? 'green.600' : 'white'}
						shadow={isActive ? undefined : 'sm'}
					>
						<Icon
							as={menu.icon}
							boxSize="15px"
							color={isActive ? 'white' : 'green.600'}
						/>
					</Center>
				)}
			</Box>
			{isOpenSideBar && (
				<HStack w="full">
					<Text
						fontSize="12px"
						fontWeight={700}
						color={
							isActive && hasIcon
								? 'black'
								: isActive && !hasIcon
								? 'green.600'
								: 'gray.600'
						}
						mr="auto"
					>
						{menu.name}
					</Text>
					{menu.subMenus?.length && (
						<Icon
							as={isActive || showSubMenu ? IoChevronDown : IoChevronUp}
							boxSize={4}
						/>
					)}
				</HStack>
			)}
		</HStack>
	);
};

const Menu: React.FC<MenuProps> = ({ menu, deep }) => {
	const pathUrl = window.location.pathname;
	const isActive = pathUrl.startsWith(menu.path ?? '');
	const hasIcon = !!menu.icon;

	const isOpenSideBar = useAtomValue(openSideBar);

	const [showSubMenu, setShowSubMenu] = React.useState<boolean>(isActive);

	const handleOpenSubMenu = () => {
		setShowSubMenu((previous) => !previous);
	};

	if (!menu.path) {
		return (
			<Text
				fontSize="12px"
				fontWeight={700}
				px={isOpenSideBar ? '22px' : '10px'}
				py="6px"
				color="gray.700"
			>
				{menu.name}
			</Text>
		);
	}

	return (
		<>
			{menu.subMenus ? (
				<Box cursor="pointer" onClick={handleOpenSubMenu}>
					<DetailMenu
						{...{ menu, isActive, hasIcon, isOpenSideBar, deep, showSubMenu }}
					/>
				</Box>
			) : (
				<BaseLink href={menu.path}>
					<DetailMenu
						{...{ menu, isActive, hasIcon, isOpenSideBar, deep, showSubMenu }}
					/>
				</BaseLink>
			)}
			{showSubMenu &&
				menu.subMenus?.map((it, index) => (
					<Menu key={`${it.path}-${index}`} menu={it} deep={deep + 1} />
				))}
		</>
	);
};

export default Menu;
