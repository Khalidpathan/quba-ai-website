import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Get environment variables
    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    const toEmail = process.env.CONTACT_TO_EMAIL;

    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { message: 'Email service not configured. Missing RESEND_API_KEY.' },
        { status: 500 }
      );
    }

    if (!toEmail) {
      console.error('CONTACT_TO_EMAIL is not configured');
      return NextResponse.json(
        { message: 'Email service not configured. Missing CONTACT_TO_EMAIL.' },
        { status: 500 }
      );
    }

    // Initialize Resend with API key
    const resend = new Resend(apiKey);

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `New Contact Form Inquiry: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Contact Form Inquiry</title>
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; color: white;">
              <h1 style="margin: 0; font-size: 24px;">New Contact Form Inquiry</h1>
            </div>
            <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e0e0e0;">
              <p style="margin-top: 0;">You have received a new inquiry from your website contact form.</p>
              
              <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea;">
                <p style="margin: 10px 0;"><strong style="color: #667eea;">Name:</strong> ${name}</p>
                <p style="margin: 10px 0;"><strong style="color: #667eea;">Email:</strong> <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a></p>
                <p style="margin: 10px 0;"><strong style="color: #667eea;">Subject:</strong> ${subject}</p>
              </div>
              
              <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h2 style="color: #667eea; margin-top: 0;">Message:</h2>
                <p style="white-space: pre-wrap; margin: 0;">${message}</p>
              </div>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center;">
                <p style="color: #666; font-size: 12px; margin: 0;">
                  This email was sent from your website contact form.<br>
                  You can reply directly to this email to respond to ${name}.
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `New Contact Form Inquiry\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json(
        { message: 'Failed to send email', error: error.message },
        { status: 500 }
      );
    }

    if (!data) {
      console.error('Resend API returned no data');
      return NextResponse.json(
        { message: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Message sent successfully', id: data.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { message: 'Failed to send email', error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
