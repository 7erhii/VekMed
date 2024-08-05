import crypto from 'crypto';

const algorithm = 'aes-256-ctr';
const secretKey = process.env.ENCRYPTION_KEY;
const iv = crypto.randomBytes(16);

export function generateAuthKey() {
  const authKey = crypto.randomBytes(32).toString('hex');

  const cipher = crypto.createCipheriv(algorithm, Buffer.from(secretKey, 'hex'), iv);
  let encrypted = cipher.update(authKey);
  encrypted = Buffer.concat([encrypted, cipher.final()]);

  return {
    iv: iv.toString('hex'),
    authKey: encrypted.toString('hex')
  };
}
