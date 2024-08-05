import { createUser } from '../../lib/auth';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { fullName, dob, phone, password } = req.body;

    try {
      // Валидация данных и создание пользователя
      const user = await createUser({ fullName, dob, phone, password });

      // Моментальная "отправка" и "проверка" кода
      const verificationResult = { success: true };

      if (verificationResult.success) {
        // Успешная регистрация и моментальное подтверждение
        res.status(200).json({ status: 'verified_and_logged_in', user });
      } else {
        res.status(500).json({ error: 'Unable to verify code automatically' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Registration failed', details: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

// 
// import { sendVerificationCode, createUser } from '../../lib/auth';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { fullName, dob, phone, password } = req.body;
//     // Валидация данных и создание пользователя
//     const user = await createUser({ fullName, dob, phone, password });
//     // Отправка SMS
//     const verificationResult = await sendVerificationCode(phone);

//     if (verificationResult.success) {
//       res.status(200).json({ status: 'verification_required' });
//     } else {
//       res.status(500).json({ error: 'Unable to send verification code' });
//     }
//   } else {
//     res.status(405).json({ error: 'Method not allowed' });
//   }
// }
