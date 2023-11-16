import { useQuery } from '@tanstack/react-query';
import { UserType } from '@/types/user';

interface UserParamsType {
	nextPageToken: string | null | undefined;
	limit: number;
	search: string | undefined;
}

const fetchUsers = async (props: UserParamsType) => {
	let url = '/api/getUsers';

	if (props.search) {
		url = '/api/searchUser';
	}
	/* eslint-disable @typescript-eslint/no-explicit-any */
	const queryString = new URLSearchParams(props as any).toString();
	const apiUrl = `${url}?${queryString}`;
	const response = await fetch(apiUrl);
	const data = await response.json();

	return {
		users: data.users || [],
		nextPageToken: data.nextPageToken || null
	}
}

const useCreateUser = async (params: UserType) => {
	try {
		const response = await fetch('/api/createUser', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(params),
		});

		return response.json();
	} catch (error) {
		console.error('Mutation error:', error);
	}
}

const useUpdateUser = async (params: UserType) => {
	try {
		const response = await fetch('/api/updateUser', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(params),
		});

		return response.json();
	} catch (error) {
		console.error('Mutation error:', error);
	}
}

const useDeleteUser = async (uid: string | undefined) => {
	try {
		const response = await fetch(`/api/deleteUser?uid=${uid}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			}
		});

		return response.json();
	} catch (error) {
		console.error('Mutation error:', error);
	}
}

const useUsers = (params: UserParamsType) => {
	return useQuery({
		queryKey: ['users', params.nextPageToken],
		queryFn: () => fetchUsers(params),
		keepPreviousData : true
	})
}


export { fetchUsers, useUsers, useCreateUser, useUpdateUser, useDeleteUser }
