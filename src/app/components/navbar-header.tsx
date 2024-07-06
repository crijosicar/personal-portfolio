'use client';

import {
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarCollapseBtn,
    NavbarContainer,
    NavbarItem,
    NavbarList,
    Toggle,
} from 'keep-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function NavbarHeader() {
    const [toggle, setToggle] = useState(false);

    return (
        <Navbar>
            <NavbarContainer className="flex items-center justify-between">
                <NavbarBrand>
                    <Image
                        priority={false}
                        src="/images/logo.svg"
                        alt="Cristian Sierra | Software Engineer"
                        width="200"
                        height="80"
                    />
                </NavbarBrand>
                <NavbarList className="hidden items-center justify-between gap-8 lg:flex">
                    <NavbarItem>
                        <Link href="/">Home</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href={'/works'}>Works</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href={'/projects'}>Projects</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href={'/hire-me'}>
                            Let's work{' '}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    strokeLinecap={'round'}
                                    strokeLinejoin={'round'}
                                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                                />
                            </svg>
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Toggle bgColor="primary" label="Toggle" size="md" withIcon={true} onChange={setToggle} />
                    </NavbarItem>
                </NavbarList>
                <NavbarCollapseBtn />
                <NavbarCollapse>
                    <NavbarItem>
                        <Link href="/">Home</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href={'/works'}>Works</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href={'/projects'}>Projects</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href={'/hire-me'}>Let's work</Link>
                    </NavbarItem>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>
    );
}
