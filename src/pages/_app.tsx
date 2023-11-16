import { ChakraProvider } from '@chakra-ui/react';
import {
	DehydratedState,
	Hydrate,
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Provider as JotaiProvider } from 'jotai';
import { NextPageContext } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import React from 'react';

import { useClearQueriesOnLogin } from '@/hooks/utils/useClearQueriesOnLogin';

import { NextPageWithLayout } from '@/pages/page';
import { theme } from '@/theme';
import '@/styles/globals.css'

type PageProps = {
	dehydratedState?: DehydratedState;
	session: Session;
};

// eslint-disable-next-line @typescript-eslint/ban-types
type AppPropsWithLayout<P = {}> = {
	err?: NextPageContext['err'];
	Component: NextPageWithLayout;
} & AppProps<P>;

const AppHead = () => {
	return (
		<Head>
			<meta name="google" content="notranslate" />
		</Head>
	);
};

function MyApp({
	Component,
	pageProps: { session, ...pageProps },
}: AppPropsWithLayout<PageProps>) {
	// Use the layout defined at the page level, if available
	const getLayout = Component.getLayout || ((page) => page);
	const [queryClient] = React.useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						refetchOnWindowFocus: false,
						refetchOnReconnect: false,
					},
				},
			})
	);

	useClearQueriesOnLogin({ queryClient });

	return (
		<>
			<AppHead />
			<QueryClientProvider client={queryClient}>
				<Hydrate state={pageProps.dehydratedState}>
					<SessionProvider session={session}>
						<JotaiProvider>
							<ChakraProvider theme={theme}>
								{getLayout(<Component {...pageProps} />)}
							</ChakraProvider>
						</JotaiProvider>
					</SessionProvider>
				</Hydrate>
				<ReactQueryDevtools position="bottom-right" />
			</QueryClientProvider>
		</>
	);
}

// MyApp.getInitialProps = async (context: AppContext) => {
// 	if (context?.ctx?.res) {
// 		context.ctx.res?.setHeader(
// 			'Cache-Control',
// 			'public, s-maxage=10, stale-while-revalidate=59'
// 		);
// 	}

// 	const appProps = await App.getInitialProps(context);

// 	return {
// 		...appProps,
// 	};
// };

export default MyApp;
