import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Shelf | Cristian's Software Engineers",
    description: 'A collection of books that I have read and recommend.',
};

export default async function Page() {
    return <h1 className="text-3xl font-bold">Shelf</h1>;
}
