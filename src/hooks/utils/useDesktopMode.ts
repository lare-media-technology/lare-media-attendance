import { useMediaQuery } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import * as React from 'react';

import { accessFromDesktop } from '@/store/main';

export const useDesktopMode = () => {
	const [desktopMode, setDesktopMode] = useAtom(accessFromDesktop);
	const [isLargerThanMD] = useMediaQuery('(min-width: 48em)');

	React.useEffect(() => {
		setDesktopMode(isLargerThanMD);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLargerThanMD]);

	return [desktopMode, setDesktopMode];
};
