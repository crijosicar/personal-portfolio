export default async function Page({ params }: { params: { id: string } }) {
    return (
        <section  className={'flex justify-center h-screen'}>
            Work {params.id}
        </section>
    );
}
