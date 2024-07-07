import { Spinner } from 'keep-react';

export default function Loading() {
    return (
        <div className="flex h-screen items-center justify-center">
            <Spinner color="info" size="lg" />
        </div>
    );
}
