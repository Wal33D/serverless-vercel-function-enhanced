import { constructHtmlResponse } from '../functions/constructHtmlResponse';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async (req: VercelRequest, res: VercelResponse) => {
    let status = false;
    let message = '';

    try {
        const { name = 'World' } = req.query;

        if (req.method === 'GET') {
            const htmlContent = constructHtmlResponse();
            res.setHeader('Content-Type', 'text/html');
            return res.send(htmlContent);
        }

        message = `Hello ${name}!`;
        status = true;
    } catch (error: any) {
        message = `Error: ${error.message}`;
    }

    return res.json({
        status,
        message,
    });
};
