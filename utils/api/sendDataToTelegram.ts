import { IDataToSend } from '@/types';

export const sendDataToTelegram = async (data: IDataToSend) => {
  let message = '<b>Заявка з сайту:</b>\n';

  try {
    // for (const [key, value] of Object.entries(data)) {
    //   message += `${key}: ${value}\n`;
    // }

    const dataToSend = Object.entries(data).reduce(
      (aggr, [key, value]) => (aggr += `${key}: ${value}\n`),
      message,
    );

    fetch('/api/telegram', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: dataToSend,
      }),
    });
  } catch (error) {
    throw new Error();
  }
};
