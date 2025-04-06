import { MDXRemoteProps } from 'next-mdx-remote/rsc';
import { HTMLAttributes, ImgHTMLAttributes, InputHTMLAttributes } from 'react';

export type MDXRemoteWithoutSource = Pick<MDXRemoteProps, 'source'>;

export type MDXRemoteOptions = MDXRemoteProps['options'];

export type MDXRemoteComponents = CustomMDXComponents;

type CustomMDXComponents = {
	h1?: (props: HTMLAttributes<HTMLHeadingElement>) => JSX.Element;
	h2?: (props: HTMLAttributes<HTMLHeadingElement>) => JSX.Element;
	h3?: (props: HTMLAttributes<HTMLHeadingElement>) => JSX.Element;
	h4?: (props: HTMLAttributes<HTMLHeadingElement>) => JSX.Element;
	h5?: (props: HTMLAttributes<HTMLHeadingElement>) => JSX.Element;
	h6?: (props: HTMLAttributes<HTMLHeadingElement>) => JSX.Element;
	p?: (props: HTMLAttributes<HTMLParagraphElement>) => JSX.Element;
	span?: (props: HTMLAttributes<HTMLSpanElement>) => JSX.Element;
	a?: (props: HTMLAttributes<HTMLAnchorElement>) => JSX.Element;
	img?: (props: ImgHTMLAttributes<HTMLImageElement>) => JSX.Element;
	ul?: (props: HTMLAttributes<HTMLUListElement>) => JSX.Element;
	ol?: (props: HTMLAttributes<HTMLOListElement>) => JSX.Element;
	li?: (props: HTMLAttributes<HTMLLIElement>) => JSX.Element;
	table?: (props: HTMLAttributes<HTMLTableElement>) => JSX.Element;
	thead?: (props: HTMLAttributes<HTMLTableSectionElement>) => JSX.Element;
	tbody?: (props: HTMLAttributes<HTMLTableSectionElement>) => JSX.Element;
	tr?: (props: HTMLAttributes<HTMLTableRowElement>) => JSX.Element;
	th?: (props: HTMLAttributes<HTMLTableCellElement>) => JSX.Element;
	td?: (props: HTMLAttributes<HTMLTableCellElement>) => JSX.Element;
	blockquote?: (props: HTMLAttributes<HTMLQuoteElement>) => JSX.Element;
	hr?: (props: HTMLAttributes<HTMLHRElement>) => JSX.Element;
	input?: (props: InputHTMLAttributes<HTMLInputElement>) => JSX.Element;
	figure?: (props: HTMLAttributes<HTMLElement>) => JSX.Element;
};
