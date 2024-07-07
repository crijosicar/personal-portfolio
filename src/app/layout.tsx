import './globals.css';
import { BaseLayoutProps } from '@/app/entities/base-layout';
import { inter } from '@/styles/fonts';
import { Spinner } from 'keep-react';
import React, { Suspense } from 'react';

import ClientThemeWrapper from '@/app/context/client-theme-wrapper';
import { ThemeProvider } from '@/app/context/theme-context';

import { ApolloWrapper } from '@/app/components/apollo-wrapper';
import MainFooter from '@/components/main-footer';
import MainHeader from '@/components/main-header';

export default function RootLayout({ children }: BaseLayoutProps) {
    return (
        <html lang="en" className={`${inter.variable} font-inter`}>
            <head>
                <title>Cristian Sierra | Portfolio</title>
            </head>
            <body>
                <ThemeProvider>
                    <ClientThemeWrapper>
                        <ApolloWrapper>
                            <Suspense fallback={<Spinner />}>
                                <MainHeader />
                                <main className={'min-h-screen'}>{children}</main>
                                <MainFooter />
                            </Suspense>
                        </ApolloWrapper>
                    </ClientThemeWrapper>
                </ThemeProvider>
            </body>
        </html>
    );
}
