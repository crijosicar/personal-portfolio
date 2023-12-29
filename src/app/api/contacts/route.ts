import { NextRequest, NextResponse } from 'next/server'

const CORE_API_URL = process.env.CORE_API_URL;
export async function POST(request: NextRequest) {
    const body = await request.json();
    const headers = {
        'Content-Type': 'application/json',
    };

    const response = await fetch(`${CORE_API_URL}/api/contacts`, {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
    });

    const data = await response.json();

    console.log("body => ", { body, headers, data });

    return NextResponse.json(data, { status: 200 });
}