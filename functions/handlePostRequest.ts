import type { VercelRequest } from '@vercel/node';

export const handlePostRequest = async (req: VercelRequest) => {
    let status = false;
    let message = '';
    let method = 'POST';

    try {
        const { name = 'World' } = req.query;
        message = `Hello ${name}! POST request handled successfully`;
        status = true;
    } catch (error: any) {
        message = `Error handling POST request: ${error.message}`;
    }

    return {
        status,
        message,
        method,
    };
};
