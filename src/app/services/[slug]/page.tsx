import {BasePageProps} from "@/app/entities/base-page";

export const metadata = {
    title: "Services | Cristian's Software Engineers",
}

export default async function Page({ params }: BasePageProps) {
    return (
        <section  className={'flex justify-center h-screen'}>
            Service ID {params.slug}
        </section>
    );
}
