export default function Sun({
	className,
}: React.HtmlHTMLAttributes<SVGSVGElement>) {
	return (
		<svg
			width='100'
			height='100'
			viewBox='0 0 100 100'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<rect
				x='16'
				y='51'
				width='2'
				height='6'
				transform='rotate(-90 16 51)'
				fill='currentColor'
			/>
			<rect
				x='25.2513'
				y='26.6655'
				width='2'
				height='6'
				transform='rotate(-45 25.2513 26.6655)'
				fill='currentColor'
			/>
			<rect
				x='51'
				y='84'
				width='2'
				height='6'
				transform='rotate(180 51 84)'
				fill='currentColor'
			/>
			<rect
				x='26.6655'
				y='74.7487'
				width='2'
				height='6'
				transform='rotate(-135 26.6655 74.7487)'
				fill='currentColor'
			/>
			<rect
				x='84'
				y='49'
				width='2'
				height='6'
				transform='rotate(90 84 49)'
				fill='currentColor'
			/>
			<rect
				x='74.7487'
				y='73.3345'
				width='2'
				height='6'
				transform='rotate(135 74.7487 73.3345)'
				fill='currentColor'
			/>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M50 72.2857C62.3081 72.2857 72.2857 62.3081 72.2857 50C72.2857 37.6919 62.3081 27.7143 50 27.7143C37.6919 27.7143 27.7143 37.6919 27.7143 50C27.7143 62.3081 37.6919 72.2857 50 72.2857ZM50 74C63.2548 74 74 63.2548 74 50C74 36.7452 63.2548 26 50 26C36.7452 26 26 36.7452 26 50C26 63.2548 36.7452 74 50 74Z'
				fill='currentColor'
			/>
			<rect x='49' y='16' width='2' height='6' fill='currentColor' />
			<rect
				x='73.3345'
				y='25.2513'
				width='2'
				height='6'
				transform='rotate(45 73.3345 25.2513)'
				fill='currentColor'
			/>
		</svg>
	);
}
