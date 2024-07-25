import { BasePageProps } from '@/app/entities/base-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Services | Cristian's Software Engineers",
};

export default async function Page({ params }: BasePageProps) {
    return <section className={'flex h-screen justify-center'}>Service ID {params.slug}</section>;
}
