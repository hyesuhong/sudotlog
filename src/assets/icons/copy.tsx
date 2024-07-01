export default function Copy({
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
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M39 23H81V65H39V23ZM41 25V63H79V25H41Z'
				fill='currentColor'
			/>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M19 35H35V37H21V75H59V69H61V77H19V35Z'
				fill='currentColor'
			/>
		</svg>
	);
}
