import { z } from 'zod';

const emailSchema = z.string({ required_error: 'Email is required'}).email("Enter a real email please.")
const nameSchema = z.string({ required_error: 'Name is required'})
const phoneSchema = z.string({ required_error: 'Phone number is required' }).regex(/^(\+\d{1,3})?\d{10}$/, "Please enter a valid phone number format with country code Example: +1234567890 or 1234567890")
const passwordSchema = z.string({ required_error: 'Confirmation password is required' }).min(6, 'Password must be at least 6 characters long');


export const userNewSchema = z.object({
	email: emailSchema,
	displayName: nameSchema,
	phoneNumber: phoneSchema,
	password: passwordSchema,
	confirmation_password: passwordSchema,
}).refine((data) => data.password === data.confirmation_password, {
	message: "Passwords don't match",
	path: ["confirmation_password"],
});

export const userSchema = z.object({
	email: emailSchema,
	displayName: nameSchema,
	phoneNumber: phoneSchema
})

export type UserNewSchemaType = z.infer<typeof userSchema>;
export type UserSchemaType = z.infer<typeof userSchema>;
