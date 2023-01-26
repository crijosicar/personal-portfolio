import { Inter } from '@next/font/google';
import { ReactNode } from "react";
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
      <html className={`${inter.variable} font-sans`}>
      <head/>
      <body className="min-h-screen bg-white dark:bg-black">
      <div className="flex flex-col h-screen">
              {/*<div className="sticky top-[45vh]">*/}
              {/*    <div className="absolute inset-y-0 right-0 h-16 w-16">*/}
              {/*        <a href={'#'}>*/}
              {/*            <svg className="w-7 h-7 fill-[#283DA5] stroke-[#A7A9B1]">*/}
              {/*                <circle cx="14" cy="14" r="11" strokeWidth={1.2}/>*/}
              {/*            </svg>*/}
              {/*        </a>*/}
              {/*        <a href={'#'}>*/}
              {/*            <svg className="w-7 h-7 fill-[#FFFFFF] stroke-[#283DA5]">*/}
              {/*                <circle cx="14" cy="14" r="11" strokeWidth={1.2}/>*/}
              {/*            </svg>*/}
              {/*        </a>*/}
              {/*        <a href={'#'}>*/}
              {/*            <svg className="w-7 h-7 fill-[#FFFFFF] stroke-[#283DA5]">*/}
              {/*                <circle cx="14" cy="14" r="11" strokeWidth={1.2}/>*/}
              {/*            </svg>*/}
              {/*        </a>*/}
              {/*        <a href={'#'}>*/}
              {/*            <svg className="w-7 h-7 fill-[#FFFFFF] stroke-[#283DA5]">*/}
              {/*                <circle cx="14" cy="14" r="11" strokeWidth={1.2}/>*/}
              {/*            </svg>*/}
              {/*        </a>*/}
              {/*        <a href={'#'}>*/}
              {/*            <svg className="w-7 h-7 fill-[#FFFFFF] stroke-[#283DA5]">*/}
              {/*                <circle cx="14" cy="14" r="11" strokeWidth={1.2}/>*/}
              {/*            </svg>*/}
              {/*        </a>*/}
              {/*    </div>*/}
              {/*</div>*/}
              <div className="sticky top-[100vh]">
                  <div className="absolute animate-pulse bottom-3 right-0 h-16 w-16">
                      <a href={'#what-do-i-do'} className={'mx-0.3'}>
                          <svg xmlns="http://www.w3.org/2000/svg"
                               viewBox="0 0 24 24"
                               fill="currentColor"
                               className="font-semibold text-primary w-8 h-8 hover:text-secondary">
                              <path fillRule="evenodd"
                                    d="M12 2.25a.75.75 0 01.75.75v16.19l6.22-6.22a.75.75 0 111.06 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06l6.22 6.22V3a.75.75 0 01.75-.75z"
                                    clipRule="evenodd"/>
                          </svg>
                      </a>
                  </div>
              </div>
              <header className="container mx-auto px-10 py-5">
                  <div className={'flex justify-evenly'}>
                      <a href={'/'} className="flex-1 font-semibold text-primary dark:text-white mx-0.5 hover:text-secondary">
                          CRISTIAN S.
                      </a>
                      <div className={'flex justify-evenly'}>
                          <a href={'/'} className="flex-1 font-semibold text-primary dark:text-white mx-0.5 hover:text-secondary">
                              EN
                          </a>
                          /
                          <a href={'/es'} className="flex-1 text-fourth dark:text-white mx-1 hover:text-secondary">
                              ES
                          </a>
                      </div>
                  </div>
              </header>
              <main className="flex-1 overflow-y-auto p-5"> {children} </main>
              {/*<footer className="container mx-auto px-10 py-5">*/}
              {/*    <div className={'flex justify-evenly'}>*/}
              {/*        <a href={''} className="flex-1 font-semibold text-primary dark:text-white mx-0.5 hover:text-secondary">*/}
              {/*            Github*/}
              {/*        </a>*/}
              {/*    </div>*/}
              {/*</footer>*/}
          </div>
      </body>
      </html>
  );
}
