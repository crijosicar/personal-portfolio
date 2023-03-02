import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export async function middleware(req: NextRequest) {
    const shouldReturn =  req.nextUrl.pathname.startsWith('/_next') ||
                            req.nextUrl.pathname.includes('/api/') ||
                            PUBLIC_FILE.test(req.nextUrl.pathname);

    if (shouldReturn) return;

    const isLocaleDefault = req.nextUrl.locale === 'default';

    if (isLocaleDefault) {
        const locale = req.cookies.get('NEXT_LOCALE') || 'en'

        return NextResponse.redirect(
            new URL(`/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url)
        )
    }
}
