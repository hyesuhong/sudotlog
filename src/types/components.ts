import {
	HTMLAttributes,
	MouseEventHandler,
	PropsWithChildren,
	ReactNode,
} from 'react';

type ButtonIconPosition = 'FORWARD' | 'BACKWARD' | 'STANDONLY';

type ButtonIcon = {
	position: ButtonIconPosition;
	children: ReactNode;
};

type ClickEvent<T> = MouseEventHandler<T>;

type ListKind = 'ordered' | 'unordered';

export interface ComponentWithLabel {
	label?: string;
}

export interface ButtonProps extends ComponentWithLabel {
	icon?: ButtonIcon;
	disabled?: boolean;
	onClick?: ClickEvent<HTMLButtonElement>;
	className?: string;
	hasBg?: boolean;
}

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
	type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export interface ImageProps {
	src?: string;
	alt?: string;
	title?: string;
	hasWrapper?: boolean;
}

export interface ListProps {
	type: ListKind;
	children?: ReactNode;
}

export interface TableDataProps extends PropsWithChildren {
	textAlign?: string;
}

export interface PageWithSlugProps {
	params: {
		slug: string;
	};
}

export interface ErrorPageProps {
	error: Error & { digest?: string };
	reset: () => void;
}
