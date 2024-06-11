import type { VercelRequest } from '@vercel/node';

export const handlePutRequest = async (req: VercelRequest) => {
    let status = false;
    let message = '';
    let method = 'PUT';

    try {
        const { name = 'World' } = req.query;
        message = `Hello ${name}! PUT request handled successfully`;
        status = true;
    } catch (error: any) {
        message = `Error handling PUT request: ${error.message}`;
    }

    return {
        status,
        message,
        method,
    };
};
