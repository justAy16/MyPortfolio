
import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req:Request, res:Response) {
  // const res= await req.json()
  const { email, subject, message } = await req.json();
  // console.log(email, subject, message);

  try {
    const send = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['adetayoayomide111@gmail.com'],
      subject: subject,
      react: EmailTemplate({
        email,
        message,
        subject
      })
    });

    return Response.json(send, {status:200});
  } catch (error) {
    return Response.json({ error },{
      status: 403,
    });
  }
}

// export async function POST() {
//   try {
//     const data = await resend.emails.send({
//       from: 'Acme <onboarding@resend.dev>',
//       to: ['adetayoayomide111@gmail.com'],
//       subject: 'Hello world',
//       react: EmailTemplate({ email: 'John', subject:'hekko', message:'tired' }),
//     });

//     return Response.json(data);
//   } catch (error) {
//     return Response.json({ error });
//   }
// }