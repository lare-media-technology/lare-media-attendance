/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config, { isServer }) => {
		config.watchOptions = {
			poll: 1000,
			aggregateTimeout: 300,
		};
		config.resolve.fallback = {
			...config.resolve.fallback,
			net: false,
			fs: false, // the solution
		};

		return config;
	},
};

module.exports = nextConfig;
