import { NextAuthOptions } from 'next-auth';

const config: NextAuthOptions = {
	providers: [
		{
			id: "google",
			name: "Google",
			type: "oauth",
			wellKnown: "https://accounts.google.com/.well-known/openid-configuration",
			authorization: { params: { scope: "openid email profile" } },
			idToken: true,
			checks: ["pkce", "state"],
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
			profile(profile) {
				return {
					id: profile.sub,
					name: profile.name,
					email: profile.email,
					image: profile.picture,
				}
			},
		},
	],
	secret: process.env.NEXTAUTH_SECRET!,
	callbacks: {
		// eslint-disable-next-line
		async signIn({ user, account, profile, email, credentials }) {
			if (account?.provider === "google") {
				// eslint-disable-next-line
				return true
			}
			return true
		},
		async redirect({ url, baseUrl }) {
			return url.startsWith(baseUrl) ? url : baseUrl;
		},
	},
};

export default config;
