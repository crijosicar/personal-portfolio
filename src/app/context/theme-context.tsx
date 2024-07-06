'use client';

import Loading from '@/app/loading';
import React, { createContext, useEffect, useState } from 'react';

interface ThemeContextType {
    theme: string;
    changeTheme: (theme: string) => void;
}

const DEFAULT_THEME = 'light';

export const ThemeContext = createContext<ThemeContextType>({
    theme: DEFAULT_THEME,
    changeTheme: Function,
});

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
    const [theme, setTheme] = useState<string>(DEFAULT_THEME);
    const [isMounted, setIsMounted] = useState<boolean>(false);

    useEffect(() => {
        setIsMounted(true);
        const storedTheme = localStorage.getItem('theme') || DEFAULT_THEME;
        setTheme(storedTheme);
    }, [theme]);

    if (!isMounted) {
        return Loading();
    }

    const changeTheme = (theme: string) => {
        setTheme(theme);
        localStorage.setItem('theme', theme);
    };

    return <ThemeContext.Provider value={{ theme, changeTheme }}>{children}</ThemeContext.Provider>;
};
