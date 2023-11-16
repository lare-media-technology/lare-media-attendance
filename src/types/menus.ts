import { IconType } from 'react-icons';
import {
	IoPerson,
} from 'react-icons/io5';

export interface SidebarMenu {
	name: string;
	icon?: IconType;
	path?: string;
	subMenus?: SidebarMenu[];
}

export const sidebarMenus: SidebarMenu[] = [
	{
		name: 'User',
		icon: IoPerson,
		path: `/users`
	},
];
