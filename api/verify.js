import { verifyCode } from '../../lib/auth';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { code, phone } = req.body;
    const isValid = await verifyCode(code, phone);

    if (isValid) {
      // Активация пользователя и авторизация
      res.status(200).json({ status: 'verified_and_logged_in' });
    } else {
      res.status(400).json({ error: 'Invalid code' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
