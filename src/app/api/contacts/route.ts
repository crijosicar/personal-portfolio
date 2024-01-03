import { NextRequest, NextResponse } from 'next/server';
import {CORE_API_URL} from "@/lib/constant";
import {ContactTopicType} from "@/entities/contact";
import {get, isEmpty, join} from "lodash";

export const dynamic = 'force-dynamic';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
    const body = await request.json();
    const headers = {
        'Accept-Encoding': 'gzip, deflate, br',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    };

    const payload = {
        fullName: body.fullName,
        email: body.email,
        topic: ContactTopicType.SOFTWARE_DESIGN,
        message: body.message,
    };

    const query =  JSON.stringify({
        query: `
            mutation CreateContact($data: ContactCreateInput!) {
                createContact(data: $data) {
                    id
                    fullName
                    email
                    topic
                    message
                    updatedAt
                    createdAt
                    updatedBy {
                        id
                        isAdmin
                    }
                    createdBy {
                        id
                        isAdmin
                    }
                }
            }
        `,
        variables: {
            data: payload,
        }
    });

    const response = await fetch(`${CORE_API_URL}/api/graphql`, {
        headers,
        method: 'POST',
        body: query,
    });

    const responseData = await response.json();

    const errors = get(responseData, 'errors');
    const responseMessage = !isEmpty(errors) ? join(errors, ',') : 'Thank you for your message. We will get back to you soon.';

    return NextResponse.json({ message: responseMessage }, { status: response.status });
}