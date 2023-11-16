import { z } from 'zod';

export const registerSchema = z.object({
	email: z.string({ required_error: 'Email is required' }).email("Enter a real email please."),
	password: z.string({ required_error: 'Password is required' }),
	confirmation_password: z.string({ required_error: 'Confirmation password is required' }),
}).refine((data) => data.password === data.confirmation_password, {
	message: "Passwords don't match",
	path: ["confirmation_password"],
});


export type RegisterSchemaType = z.infer<typeof registerSchema>;
