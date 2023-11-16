export interface BaseFieldProps {
	label: string;
	placeholder?: string;
	isHalf?: boolean | undefined;
	isRequired?: boolean | undefined;
	isDisabled?: boolean | undefined;
	isArea?: boolean | undefined;
	isDate?: boolean | undefined;
	isValidator?: boolean | undefined;
	defaultValue?: string | object | undefined;
	paddingTop?: string;
}
