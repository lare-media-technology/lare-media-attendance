import {
	HStack,
	Table,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react';
import * as React from 'react';
import PopupEditButton from './popup/PopupEditButton';
import PopupDeleteButton from './popup/PopupDeleteButton';
import { UserType } from '@/types/user';
import Pagination from '../utils/pagination/Pagination';

export interface UserTableProps {
	user: UserType[];
	refetch(): void;
	handlePageChange(pageNumber: number, pageToken: string | null | undefined) : void;
	pageToken: string | null | undefined;
	currentPage: number;
}

const UserTable: React.FC<UserTableProps> = ({
	user,
	refetch,
	pageToken,
	currentPage,
	handlePageChange
}) => {

	return (
		<TableContainer>
			<Table overflowX="auto" fontSize="xs">
				<Thead bg="green.500">
					<Tr>
						<Th textColor="white">UID</Th>
						<Th textColor="white">Name</Th>
						<Th textColor="white">Email</Th>
						<Th textColor="white">Phone Number</Th>
						<Th
							textColor="white"
							position="sticky"
							width="200px"
							right={0}
							bg="green.500"
						>
							Action
						</Th>
					</Tr>
				</Thead>
				<Tbody>
					{user.map((item, index) => (
						<Tr key={`${item.uid}---${index}`}>
							<Td>{item.uid}</Td>
							<Td>{item.displayName}</Td>
							<Td>{item.email}</Td>
							<Td>{item.phoneNumber}</Td>
							<Td>
								<HStack justify="center">
									<PopupEditButton userData={item} refetch={refetch} />
									<PopupDeleteButton userData={item} refetch={refetch} />
								</HStack>
							</Td>
						</Tr>
					))}
				</Tbody>
			</Table>
			<Pagination currentPage={currentPage} totalPages={10} pageToken={pageToken} onPageChange={handlePageChange} />
		</TableContainer>
	);
};

export default UserTable;
