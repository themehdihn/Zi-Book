const Buffer = require('buffer').Buffer;

export const decodeToken = (token) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    const decoded = JSON.parse(Buffer.from(base64, 'base64').toString('utf-8'));
    return decoded
}