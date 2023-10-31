import { NextResponse } from 'next/server';

export const POST = async (req: Request) => {
  const TG_BOT_TOKEN = process.env.NEXT_PUBLIC_TG_BOT_TOKEN;
  const TG_CHAT_ID = process.env.NEXT_PUBLIC_TG_CHAT_ID;
  const URI_API = `https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`;

  try {
    const message = await req.json();
    const response = await fetch(URI_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TG_CHAT_ID,
        text: message.text,
        parse_mode: 'HTML',
      }),
    });

    if (response.ok) {
      return NextResponse.json({ status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ status: 500 });
  }
};
