'use client';

import { Card } from 'keep-react';
import Image from 'next/image';
import React from 'react';

export default function HomeClientsCarousel() {
    const latOneImageUrl = '/images/LatOne.png';
    const solumDigitalImageUrl = '/images/SolumDigital.png';
    const koghiImageUrl = '/images/Koghi.png';

    return (
        <div className="grid grid-cols-3 gap-5">
            <Card className="relative max-w-md overflow-hidden rounded-none">
                <Card.Container className="flex items-start border-none p-3">
                    <Card.Container className="h-full w-full basis-1/4">
                        <Image src={latOneImageUrl} alt="blog" height={600} width={200} />
                    </Card.Container>
                    <Card.Container className="basis-3/4 px-3 md:px-6">
                        <Card.Title className="text-body-5 font-medium text-metal-700 md:text-body-2">
                            LatOne Group
                        </Card.Title>
                        <Card.Description className="text-body-6 font-normal text-metal-500 md:text-body-5">
                            Component design systems can help developers to be more productive
                        </Card.Description>
                    </Card.Container>
                </Card.Container>
            </Card>
            <Card className="relative max-w-md overflow-hidden rounded-none">
                <Card.Container className="flex items-start border-none p-3">
                    <Card.Container className="h-full w-full basis-1/4">
                        <Image src={solumDigitalImageUrl} alt="blog" height={600} width={200} />
                    </Card.Container>
                    <Card.Container className="basis-3/4 px-3 md:px-6">
                        <Card.Title className="text-body-5 font-medium text-metal-700 md:text-body-2">
                            Solum Digital
                        </Card.Title>
                        <Card.Description className="text-body-6 font-normal text-metal-500 md:text-body-5">
                            Component design systems can help developers to be more productive
                        </Card.Description>
                    </Card.Container>
                </Card.Container>
            </Card>
            <Card className="relative max-w-md overflow-hidden rounded-none">
                <Card.Container className="flex items-start border-none p-3">
                    <Card.Container className="h-full w-full basis-1/4">
                        <Image src={koghiImageUrl} alt="blog" height={600} width={200} />
                    </Card.Container>
                    <Card.Container className="basis-3/4 px-3 md:px-6">
                        <Card.Title className="text-body-5 font-medium text-metal-700 md:text-body-2">Koghi</Card.Title>
                        <Card.Description className="text-body-6 font-normal text-metal-500 md:text-body-5">
                            Component design systems can help developers to be more productive
                        </Card.Description>
                    </Card.Container>
                </Card.Container>
            </Card>
        </div>
    );
}
