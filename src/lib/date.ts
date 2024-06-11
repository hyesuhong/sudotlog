export function convertDateToString(date: Date, format?: string) {
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const dayDate = date.getDate();

	if (!format) {
		const stringDate = `${addZero(month)}.${addZero(dayDate)}`;

		return stringDate;
	}

	let stringDate = format;

	stringDate = stringDate.replace('YYYY', year.toString());
	stringDate = stringDate.replace('MM', addZero(month));
	stringDate = stringDate.replace('mm', month.toString());
	stringDate = stringDate.replace('DD', addZero(dayDate));
	stringDate = stringDate.replace('dd', dayDate.toString());

	return stringDate;
}

function addZero(target: string | number) {
	const t = typeof target === 'number' ? target.toString() : target;

	return t.padStart(2, '0');
}
