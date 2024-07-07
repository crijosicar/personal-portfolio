'use client';

import { ThemeContext } from './theme-context';
import React, { useContext } from 'react';

export default function ClientThemeWrapper({ children }: React.PropsWithChildren) {
    const { theme } = useContext(ThemeContext);
    return <div data-theme={theme}>{children}</div>;
}
