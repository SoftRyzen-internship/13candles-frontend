import { dataToSendT } from '@/types/DataToSend';

export const sendDataToTelegram = async (data: dataToSendT) => {
  let message = '<b>Заявка з сайту:</b>\n';

  try {
    const dataToSend = Object.entries(data).reduce(
      (aggr, [key, value]) => (aggr += `${key}: ${value}\n`),
      message,
    );

    const res = await fetch('/api/telegram', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: dataToSend,
      }),
    });

    if (res.ok) {
      return true;
    }

    throw new Error();
  } catch (error) {
    throw new Error();
  }
};
