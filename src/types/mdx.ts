import { MDXRemoteProps } from 'next-mdx-remote/rsc';

export type MDXRemoteWithoutSource = Pick<MDXRemoteProps, 'source'>;

export type MDXRemoteOptions = MDXRemoteProps['options'];

export type MDXRemoteComponents = MDXRemoteProps['components'];
