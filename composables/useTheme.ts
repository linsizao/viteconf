import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark({
	valueDark: 'dark',
	valueLight: 'light',
	selector: 'body',
});

export const useTheme = () => {
	const toggleTheme = useToggle(isDark);

	return { isDark, toggleTheme };
};
