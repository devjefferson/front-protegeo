import { NextRequest } from 'next/server';
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    const mailerSend = new MailerSend({
      apiKey: 'mlsn.3f32301176e8197a29f0c9811fb734adcae23ae9767408149d8bc0291b0852c9',
    });

    const sentFrom = new Sender("MS_oCMFAT@trial-3zxk54vd7q14jy6v.mlsender.net", "ProteGeo");


    const recipients = [
      new Recipient(email, name)
    ];

    const code = Math.floor(1000 + Math.random() * 9000);

    const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setReplyTo(sentFrom)
    .setSubject("Código de Acesso")
    .setHtml(`<strong>Seu código de acesso: ${code}</strong>`)
    .setText("This is the text content");

  await mailerSend.email.send(emailParams);

    return new Response(
      JSON.stringify({ message: 'Seu código foi enviado para seu email',  code: code }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Erro ao enviar o e-mail', details: error }),
      { status: 500 }
    );
  }
}