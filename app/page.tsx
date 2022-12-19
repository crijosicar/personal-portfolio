export default async function Page() {
    return (
        <>
            <section className={'flex flex-col gap-8 justify-center items-center h-screen'}>
                <h1 className={'text-2xl font-semibold text-slate-700 dark:text-slate-300 px-20 text-center'}>
                    Experienced software engineer and web developer with more than 7 years of experience working in big projects.
                </h1>
                <div className={'flex justify-around items-center gap-6'}>
                    <div>
                        <a href={'/resume'} className={'flex justify-center flex-col gap-1 items-center'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                            <h3 className={'font-semibold'}>About</h3>
                        </a>
                    </div>
                    <div>
                        <a href={'/work'} className={'flex justify-center flex-col gap-1 items-center'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                            <h3 className={'font-semibold'}>Work</h3>
                        </a>
                    </div>
                    <div>
                        <a href={'/hire-me'} className={'flex justify-center flex-col gap-1 items-center'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                            <h3 className={'font-semibold'}>Hire me</h3>
                        </a>
                    </div>
                </div>
            </section>
            <section className={'flex flex-col gap-8 justify-center items-center h-screen bg-gray-300'}>

            </section>
        </>
    );
}
