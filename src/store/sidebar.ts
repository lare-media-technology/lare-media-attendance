import { atomWithStorage } from 'jotai/utils';

const openSideBar = atomWithStorage('sidebar', true);

export { openSideBar };
