type Fn = <T>(params?: T) => void;

export const throttle = (fn: Fn, delay?: number) => {
	const delayTime = delay || 0;

	function throttled() {
		setTimeout(() => {
			fn();
		}, delayTime);
	}

	return throttled;
};
