export default async function Page({ params }: { params: { id: string } }) {
    return (
        <section id={'about'} className={'flex justify-center h-screen'}>
            Service {params.id}
        </section>
    );
}
