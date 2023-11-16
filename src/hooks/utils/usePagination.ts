import { useAtom, atom } from 'jotai'

const paginationAtom = atom<string[]>([])

export const usePaginationState = () => {
	const [paginationData, setPaginationData] = useAtom(paginationAtom);

	const setPagination = (pageToken: string) => setPaginationData([...paginationData, pageToken]);
	const startPagination = () => setPaginationData([]);

	return { paginationData, startPagination, setPagination };
};
