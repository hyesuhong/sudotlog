'use client';

import { ThemeProvider } from '@/libs/contexts/theme';

export default function Provider({ children }: React.PropsWithChildren) {
	return <ThemeProvider>{children}</ThemeProvider>;
}
