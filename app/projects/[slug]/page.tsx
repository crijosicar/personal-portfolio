import {get, isEmpty, map} from "lodash";
import {Metadata} from "next";
import {PageBaseProps} from "@/entities/page.entity";
import {getAllPortfolios} from "@/queries/portfolios/get-all-portfolios";
import {getPortfolioBySlug} from "@/queries/portfolios/get-portfolio-by-slug";

export const revalidate = 5;

export async function generateStaticParams() {
    const portfolios = await getAllPortfolios();

    return map(portfolios, (portfolio: any) => ({
        slug: get(portfolio, 'slug'),
    }));
}

export async function generateMetadata({ params }: PageBaseProps): Promise<Metadata> {
    const slug = get(params, 'slug');

    if(isEmpty(slug)) {
        return {};
    }

    const portfolio = await getPortfolioBySlug(slug);
    const title = `${get(portfolio, 'name')} | Cristian's Software Engineers`;
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

export default async function Page({ params }: PageBaseProps) {
    return (
        <section  className={'flex justify-center h-screen'}>
            Project ID {params.slug}
        </section>
    );
}
