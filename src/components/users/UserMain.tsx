import { Box, SkeletonText } from '@chakra-ui/react';
import * as React from 'react';

import UserHeader from '@/components/users/UserHeader';
import UserTable from '@/components/users/UserTable';
import { fetchUsers, useUsers } from '@/hooks/master_data/useUser';
import { useQueryClient } from '@tanstack/react-query';
import { usePaginationState } from '@/hooks/utils/usePagination';
import { limit } from '@/store/main';

export interface UserMainProps { }

const UserMain: React.FC<UserMainProps> = () => {
	const [nextPageToken, setNextPageToken] = React.useState<string | null | undefined>(null);
	const [searchValue, setSearchValue] = React.useState<string>('');
	const [currentPage, setCurrentPage] = React.useState<number>(1);
	const queryClient = useQueryClient();
	const { paginationData, setPagination, startPagination } = usePaginationState();
	const { data, isLoading } = useUsers({
		nextPageToken,
		limit: limit,
		search: searchValue
	});

	const handlePageChange = (pageNumber: number, pageToken: string) => {
		let nextPage: string | null = pageToken
		let size: number = limit

		if (paginationData[pageNumber - 2]) {
			nextPage = paginationData[pageNumber - 2]
		} else if (pageNumber === 1) {
			nextPage = null
		} else if (data?.users.length < limit) {
			nextPage = null
			size = 0
		}

		if (paginationData.indexOf(pageToken) === -1) {
			setPagination(pageToken)
		}

		queryClient.prefetchQuery({
			queryKey: ['users', nextPage],
			queryFn: () => fetchUsers({
				nextPageToken: nextPage,
				limit: size,
				search: searchValue
			}),
		})

		setCurrentPage(pageNumber)
		setNextPageToken(nextPage)
	};

	const handleRefetch = () => {
		queryClient.prefetchQuery({
			queryKey: ['users', null],
			queryFn: () => fetchUsers({
				nextPageToken: null,
				limit: limit,
				search: searchValue
			}),
		})
		setCurrentPage(1)
		startPagination();
	};

	return (
		<Box p={{ base: 4, md: 6 }} shadow="md" rounded="lg" bg="white">
			<UserHeader setSearchValue={setSearchValue} refetch={handleRefetch} />
			{isLoading ? <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' /> :
				<UserTable
					user={data?.users}
					refetch={handleRefetch}
					pageToken={data?.nextPageToken}
					currentPage={currentPage}
					handlePageChange={handlePageChange}
				/>
			}
		</Box>
	);
};

export default UserMain;
