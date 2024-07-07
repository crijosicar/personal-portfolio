'use client';

import Loading from '@/app/loading';
import React, { createContext, useEffect, useState } from 'react';

interface ThemeContextType {
    theme: string;
    changeTheme: (theme: string) => void;
}

export enum APP_THEMES {
    LIGHT = 'light',
    DARK = 'dark'
}

const DEFAULT_THEME = APP_THEMES.LIGHT;

export const ThemeContext = createContext<ThemeContextType>({
    theme: DEFAULT_THEME,
    changeTheme: Function,
});

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
    const [theme, setTheme] = useState<string>(DEFAULT_THEME);
    const [isMounted, setIsMounted] = useState<boolean>(false);

    const setKeepTheme = (theme: string) => {
        const root = window.document.documentElement;
        root.classList.remove(APP_THEMES.LIGHT, APP_THEMES.DARK);
        root.classList.add(theme);
    };

    const changeTheme = (theme: string) => {
        setTheme(theme);
        setKeepTheme(theme);
        localStorage.setItem('theme', theme);
    };

    useEffect(() => {
        setIsMounted(true);
        const storedTheme = localStorage.getItem('theme') || DEFAULT_THEME;
        setTheme(storedTheme);
        setKeepTheme(theme);
    }, [theme]);

    if (!isMounted) {
        return Loading();
    }

    return <ThemeContext.Provider value={{ theme, changeTheme }}>{children}</ThemeContext.Provider>;
};
