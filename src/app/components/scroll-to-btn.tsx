'use client';

import Link from "next/link";
import React, {useState} from "react";
import {useScrollWrapperContext} from "./scroll-wrapper";

export default function ScrollToBtn() {
    const scrollWrapperContext = useScrollWrapperContext();
    const [activeSectionIdx, setActiveSectionIdx] = useState(scrollWrapperContext?.selectedSection);

    const scrollTo = (sectionIdx: number) => {
        const isInvalidIndex = sectionIdx < 0 || sectionIdx > 4;

        if (isInvalidIndex) return;

        const section = document.querySelector(`#${scrollWrapperContext?.sections[sectionIdx]}`);

        if (section) {
            section.scrollIntoView({behavior: 'smooth', block: 'start'});
            const newSectionIdx = sectionIdx === 4 ? 0 : sectionIdx + 1;
            setActiveSectionIdx(newSectionIdx);
        }
    };

    return (
        <div className="fixed bottom-0 left-0 w-screen h-12 flex justify-evenly">
            <Link href={'#'} className={'mx-0.3 animate-pulse'} onClick={() => scrollTo(activeSectionIdx)}>
                {activeSectionIdx > 0
                    ? (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            className={`font-semibold w-8 h-8 ${activeSectionIdx === 4 ? 'text-white hover:text-primary' : 'text-primary hover:text-seconday'}`}>
                        <path fillRule="evenodd"
                              d="M12 2.25a.75.75 0 01.75.75v16.19l6.22-6.22a.75.75 0 111.06 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06l6.22 6.22V3a.75.75 0 01.75-.75z"
                              clipRule="evenodd"/>
                    </svg>)
                    : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                            stroke="currentColor"
                            className={`font-semibold ${activeSectionIdx === 4 ? 'text-white hover:text-primary' : 'text-primary hover:text-seconday'} w-8 h-8`}>
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"/>
                    </svg>)
                };
            </Link>
        </div>
    );
}