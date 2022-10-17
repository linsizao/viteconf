import { Directive } from 'vue';

/** Dispatch event on click outside of node */
function clickOutside(node: HTMLElement, callback: () => void) {
	const handleClick = (e: MouseEvent) => {
		if (!node.contains(e.target as HTMLElement)) callback();
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		},
	};
}

const elMap = new Map<HTMLElement, ReturnType<typeof clickOutside>>();
export const vClickOutside: Directive<
	HTMLElement,
	Parameters<typeof clickOutside>[1]
> = {
	mounted: (el, binding) => {
		elMap.set(el, clickOutside(el, binding.value));
	},
	unmounted: (el) => {
		elMap.get(el)?.destroy();
		elMap.delete(el);
	},
};
