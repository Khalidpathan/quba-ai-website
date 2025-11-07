import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
    }

    const smtpUser = process.env.EMAIL_USER;
    const smtpPass = process.env.EMAIL_PASS;
    const toEmail = process.env.CONTACT_TO || process.env.EMAIL_USER;
    const fromEmail = process.env.EMAIL_FROM || process.env.EMAIL_USER;

    if (!smtpUser || !smtpPass || !toEmail || !fromEmail) {
      return NextResponse.json(
        { message: 'Email service not configured. Missing environment variables.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: fromEmail,
      replyTo: `${name} <${email}>`,
      to: toEmail,
      subject: `New Inquiry: ${subject}`,
      text: `You have a new inquiry from your website contact form.\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
