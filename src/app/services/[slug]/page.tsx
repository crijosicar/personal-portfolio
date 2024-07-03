import { BasePageProps } from '@/app/entities/base-page';

export const metadata = {
    title: "Services | Cristian's Software Engineers",
};

export default async function Page({ params }: BasePageProps) {
    return <section className={'flex h-screen justify-center'}>Service ID {params.slug}</section>;
}
