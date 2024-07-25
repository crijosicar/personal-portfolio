'use client';

import { Navbar, NavbarCollapse, NavbarCollapseBtn, NavbarContainer, NavbarItem, NavbarList } from 'keep-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import SwitchTheme from '@/components/switch-theme';

export default function MainHeader() {
    const pathname = usePathname();

    return (
        <div className={'container mx-auto flex justify-end p-5 lg:justify-center'}>
            <Navbar className={'border-0'}>
                <NavbarContainer>
                    <NavbarList>
                        <NavbarItem active={pathname === '/'}>
                            <Link href="/">Home</Link>
                        </NavbarItem>
                        <NavbarItem active={pathname === '/works'}>
                            <Link href={'/works'}>Works</Link>
                        </NavbarItem>
                        <NavbarItem active={pathname === '/projects'}>
                            <Link href={'/projects'}>Projects</Link>
                        </NavbarItem>
                        <NavbarItem active={pathname === '/hire-me'}>
                            <Link href={'/hire-me'}>
                                <div className={'flex items-center justify-between gap-2'}>
                                    Let&apos;s work
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
                                </div>
                            </Link>
                        </NavbarItem>
                        <div className={'flex items-center justify-center'}>
                            <SwitchTheme />
                        </div>
                    </NavbarList>
                    <NavbarCollapseBtn />
                    <NavbarCollapse>
                        <NavbarItem active={pathname === '/'}>
                            <Link href="/">Home</Link>
                        </NavbarItem>
                        <NavbarItem active={pathname === '/works'}>
                            <Link href={'/works'}>Works</Link>
                        </NavbarItem>
                        <NavbarItem active={pathname === '/projects'}>
                            <Link href={'/projects'}>Projects</Link>
                        </NavbarItem>
                        <NavbarItem active={pathname === '/hire-me'}>
                            <Link href={'/hire-me'}>
                                <div className={'flex items-center justify-between gap-2'}>
                                    Let&apos;s work
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
                                </div>
                            </Link>
                        </NavbarItem>
                        <div className={'mx-2 flex items-center justify-center'}>
                            <SwitchTheme />
                        </div>
                    </NavbarCollapse>
                </NavbarContainer>
            </Navbar>
        </div>
    );
}
