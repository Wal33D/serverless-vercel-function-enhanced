import type { VercelRequest, VercelResponse } from '@vercel/node';

import { handleGetRequest } from '../functions/handleGetRequest';
import { handlePutRequest } from '../functions/handlePutRequest';
import { handlePostRequest } from '../functions/handlePostRequest';

export default async (req: VercelRequest, res: VercelResponse) => {
    try {
        if (req.method === 'GET') {
            const htmlContent = handleGetRequest();
            res.setHeader('Content-Type', 'text/html');
            return res.send(htmlContent);
        } else if (req.method === 'PUT') {
            const response = await handlePutRequest(req);
            return res.json(response);
        } else if (req.method === 'POST') {
            const response = await handlePostRequest(req);
            return res.json(response);
        }

        return res.status(405).json({
            status: false,
            message: `Method ${req.method} not allowed`,
        });
    } catch (error: any) {
        return res.json({
            status: false,
            message: `Error: ${error.message}`,
        });
    }
};
