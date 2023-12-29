'use client';

import {Carousel} from "keep-react";
import Image from "next/image";
import React from "react";

export default function HomeClientsCarousel() {
    return (
        <div className="grid grid-cols-3 gap-4">
            <Carousel
                showControls={false}
                indicatorsType="ring"
                indicatorsTypeColors="slate"
            >
                <Image
                    src="https://images.prismic.io/staticmania/dbc3da5c-53e4-409a-bc60-24b5f19014d3_4.png?auto=compress,format"
                    alt="slider-1"
                    height={200}
                    width={200}
                />
            </Carousel>
            <Carousel
                showControls={false}
                indicatorsType="ring"
                indicatorsTypeColors="slate"
            >
                <Image
                    src="https://images.prismic.io/staticmania/ef443060-de22-498b-94c9-3fd8eaed83fe_3.png?auto=compress,format"
                    alt="slider-2"
                    height={200}
                    width={200}
                />
            </Carousel>
            <Carousel
                showControls={false}
                indicatorsType="ring"
                indicatorsTypeColors="slate"
            >
                <Image
                    src="https://images.prismic.io/staticmania/ef443060-de22-498b-94c9-3fd8eaed83fe_3.png?auto=compress,format"
                    alt="slider-3"
                    height={200}
                    width={200}
                />
            </Carousel>
        </div>
    );
}
