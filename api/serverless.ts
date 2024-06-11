import type { VercelRequest, VercelResponse } from '@vercel/node';

import { handleGetRequest } from '../functions/handleGetRequest';
import { handlePutRequest } from '../functions/handlePutRequest';
import { handlePostRequest } from '../functions/handlePostRequest';

export default async (request: VercelRequest, response: VercelResponse) => {
    try {
        if (request.method === 'GET') {
            return handleGetRequest({ request, response });
        } else if (request.method === 'PUT') {
            return handlePutRequest({ request, response });
        } else if (request.method === 'POST') {
            return handlePostRequest({ request, response });
        }

        return response.status(405).json({
            status: false,
            message: `Method ${request.method} not allowed`,
        });
    } catch (error: any) {
        return response.json({
            status: false,
            message: `Error: ${error.message}`,
        });
    }
};
