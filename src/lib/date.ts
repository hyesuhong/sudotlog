export function convertDateToString(date: Date) {
	const month = date.getMonth() + 1;
	const dayDate = date.getDate();

	const stringDate = `${addZero(month)}.${addZero(dayDate)}`;

	return stringDate;
}

function addZero(target: string | number) {
	const t = typeof target === 'number' ? target.toString() : target;

	return t.padStart(2, '0');
}
