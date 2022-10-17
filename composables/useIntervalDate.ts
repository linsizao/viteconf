export const useIntervalDate = (interval: number) => {
	const time = ref(new Date());

	const intervalId = setInterval(() => (time.value = new Date()), interval);
	onUnmounted(() => clearInterval(intervalId));

	return time;
};
