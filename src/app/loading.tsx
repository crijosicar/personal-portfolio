"use client";

import {Spinner} from "keep-react";

export default function Loading() {
    return (
        <div className="flex justify-center items-center h-screen">
            <Spinner color="info" size="lg"/>
        </div>
    );
}