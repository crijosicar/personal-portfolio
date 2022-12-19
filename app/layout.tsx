import { Inter } from '@next/font/google';
import Image from 'next/image'

import './globals.css';

const inter = Inter({
    variable: '--font-inter',
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" className={`${inter.variable}`}>
      <head/>
      <body className="bg-white dark:bg-black">
          <div className={'flex justify-around p-4'}>
              <a href={'/'} className="font-semibold px-3 py-2 text-slate-700 hover:text-slate-900">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                  </svg>
              </a>
              <a href={'/'} className="font-semibold px-3 py-2 text-slate-700 hover:text-slate-900">
                  Cristian Sierra
              </a>
              <a href={'/work'} className="font-semibold px-3 py-2 text-slate-700 hover:text-slate-900">Work</a>
          </div>
          <div> {children} </div>
      </body>
      </html>
  )
}
