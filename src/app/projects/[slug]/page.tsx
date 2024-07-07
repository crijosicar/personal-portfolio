import { BasePageProps } from '@/app/entities/base-page';
import { getAllPortfolios } from '@/app/queries/portfolios/get-all-portfolios';
import { getPortfolioBySlug } from '@/app/queries/portfolios/get-portfolio-by-slug';
import { get, isEmpty, map } from 'lodash';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const revalidate = 5;

export async function generateStaticParams(): Promise<{ slug: string }[]> {
    const portfolios = await getAllPortfolios();

    return map(portfolios, (portfolio: any) => ({
        slug: get(portfolio, 'slug', ''),
    }));
}

export async function generateMetadata({ params }: BasePageProps): Promise<Metadata> {
    const slug = get(params, 'slug');

    if (isEmpty(slug)) {
        notFound();
    }

    const portfolio = await getPortfolioBySlug(slug);
    const title = `${get(portfolio, 'name')} | Cristian&apos;s Software Engineers`;
    const description = get(portfolio, 'description');

    return {
        title,
        description,
        openGraph: {
            title,
            description,
        },
    };
}

export default async function Page({ params }: BasePageProps): Promise<JSX.Element> {
    return <section className={'flex h-screen justify-center'}>Project ID {params.slug}</section>;
}
