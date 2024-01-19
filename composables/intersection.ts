export const useIntersection = (el: HTMLElement, cb: Function) => {
	const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
		if (isIntersecting) {
			cb();
			stop();
		}
	});
};
