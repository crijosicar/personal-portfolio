'use client';

import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';

const sections = ['top-navbar', 'what-do-i-do', 'works', 'have-a-project', 'bottom-bar'];

export type ScrollWrapperContext = {
    selectedSection: number;
    setSelectedSection: Function;
    sections: string[];
};

const defaultContext: ScrollWrapperContext = {
    selectedSection: 1,
    setSelectedSection: () => {},
    sections,
};

const ScrollWrapperContext = createContext<ScrollWrapperContext>(defaultContext);

export const useScrollWrapperContext = () => useContext(ScrollWrapperContext);

export default function ScrollWrapperProvider({ children }: { children: ReactNode }) {
    const [selectedSection, setSelectedSection] = useState(1);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY >= 0 && window.scrollY < 715) {
                setSelectedSection(1);
            } else if (window.scrollY >= 715 && window.scrollY < 1470) {
                setSelectedSection(2);
            } else if (window.scrollY >= 1470 && window.scrollY < 2225) {
                setSelectedSection(3);
            } else if (window.scrollY >= 2225) {
                setSelectedSection(4);
            }
        };

        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <ScrollWrapperContext.Provider value={{ selectedSection, setSelectedSection, sections }}>
            {children}
        </ScrollWrapperContext.Provider>
    );
}
