'use client';

import { josefinSans } from '@/styles/fonts';
import { Navbar } from 'keep-react';
import Image from 'next/image';
import React from 'react';

export default function NavbarHeader() {
    return (
        <Navbar fluid={true}>
            <Navbar.Container className="flex items-center justify-between">
                <Navbar.Brand>
                    <Image
                        src="/images/logo.svg"
                        alt="Cristian Sierra | Software Engineer"
                        width="200"
                        height="80"
                        style={josefinSans.style}
                    />
                </Navbar.Brand>
                <Navbar.Container tag="ul" className="hidden items-center justify-between gap-8 lg:flex">
                    <Navbar.Link linkName="Home" href={'/'} />
                    <Navbar.Link linkName="Works" href={'/works'} />
                    <Navbar.Link linkName="Projects" href={'/projects'} />
                    <Navbar.Link
                        linkName="Let's work"
                        href={'/hire-me'}
                        icon={
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
                        }
                        iconAnimation={false}
                    />
                </Navbar.Container>
                <Navbar.Collapse collapseType="fullWidth">
                    <Navbar.Container tag="ul" className="flex flex-col gap-5">
                        <Navbar.Link linkName="Home" href={'/'} />
                        <Navbar.Link linkName="Works" href={'/works'} />
                        <Navbar.Link linkName="Projects" href={'/projects'} />
                        <Navbar.Link linkName="Let's work" href={'/hire-me'} />
                    </Navbar.Container>
                </Navbar.Collapse>
            </Navbar.Container>
        </Navbar>
    );
}
