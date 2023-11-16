import {
	Button,
	extendTheme,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	Input,
	Select,
	Text,
	Textarea,
	Th,
	ThemeConfig,
	Tr,
} from '@chakra-ui/react';

const colors = {
	brand: {
		900: '#1a365d',
		800: '#153e75',
		700: '#2a69ac',
	},
	BluePrimary: {
		100: '#F7FAFC',
		200: '#47ABF7',
		500: '#1572E9',
	},
	GreenPrimary: {
		50: '#F0F8F2',
		100: '#ECFCF3',
		200: '#3FCE36',
		300: '#21D173',
		400: '#0F8445',
		500: '#025628',
		600: '#0F8445',
		700: '#025628',
		800: '#285E61',
		900: '#00411E',
	},
	YellowPrimary: {
		'50': '#fffef9',
		'100': '#fffad9',
		'200': '#feef88',
		'300': '#fddf1e',
		'400': '#e7cc1b',
		'500': '#bea816',
		'600': '#988612',
		'700': '#77690e',
		'800': '#594e0a',
		'900': '#494109',
	},
	GrayPrimary: {
		600: '#828282',
	},
	OrangePrimary: {
		400: '#FFF3E4',
		500: '#FFFBE4',
		600: '#FEBD1E',
	},
	BlackPrimary: {
		200: 'rgba(75,75,75,0.38)',
		400: '#2D3748',
	},
};

const config: ThemeConfig = {
	initialColorMode: 'system',
	useSystemColorMode: true,
};

FormLabel.defaultProps = {
	...FormLabel.defaultProps,
	fontSize: '12px',
	fontWeight: 'medium',
};
FormHelperText.defaultProps = {
	...FormHelperText.defaultProps,
	fontSize: 'xs',
	fontWeight: 'light',
};
Input.defaultProps = {
	...Input.defaultProps,
	focusBorderColor: 'GreenPrimary.400',
	fontSize: '12px',
	_readOnly: {
		bg: 'gray.100',
	},
};
Button.defaultProps = {
	...Button.defaultProps,
	fontSize: '14px',
};
FormErrorMessage.defaultProps = {
	...FormErrorMessage.defaultProps,
	fontSize: '12px',
};
Select.defaultProps = {
	...Select.defaultProps,
	fontSize: '12px',
};
Textarea.defaultProps = {
	...Textarea.defaultProps,
	fontSize: '12px',
};
Text.defaultProps = {
	...Textarea.defaultProps,
	fontSize: '12px',
};
Tr.defaultProps = {
	...Textarea.defaultProps,
	fontSize: '12px',
};
Th.defaultProps = {
	...Textarea.defaultProps,
	bg: 'green.500',
	color: 'white',
	fontSize: '12px',
};

const fonts = {
	heading: `'Inter', sans-serif`,
	body: `'Inter', sans-serif`,
};

export const theme = extendTheme({
	colors,
	config,
	fonts,
	components: {
		Text: {
			variants: {
				normal: {
					fontSize: '12px',
				},
			},
		},
		Button: {
			variants: {
				white: {
					bg: 'white',
					border: '1px',
					borderColor: 'gray.400',
				},
			},
		},
	},
});
