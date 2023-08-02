export const metadata = {
    title: "Services | Cristian's Software Engineers",
}

export default async function Page({ params }: { params: { slug: string } }) {
    return (
        <section  className={'flex justify-center h-screen'}>
            Service ID {params.slug}
        </section>
    );
}
