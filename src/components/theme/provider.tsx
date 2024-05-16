'use client';

import { ThemeProvider } from '@/contexts/theme';
import { useEffect, useState } from 'react';

export default function Provider({ children }: React.PropsWithChildren) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return mounted ? <ThemeProvider>{children}</ThemeProvider> : <>{children}</>;
}
