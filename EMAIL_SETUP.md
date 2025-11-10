# Email Service Setup Guide

## Overview

The contact form now uses **Resend** - a modern, developer-friendly email API service. This replaces the previous Gmail SMTP setup which required complex configuration.

## Why Resend?

- ✅ **Free Tier**: 3,000 emails/month (100 emails/day)
- ✅ **Easy Setup**: Simple API key authentication
- ✅ **Great Deliverability**: High email delivery rates
- ✅ **Modern API**: Built for Next.js and modern web apps
- ✅ **No SMTP Configuration**: No need for app passwords or OAuth

## Quick Setup (5 minutes)

### Step 1: Create a Resend Account

1. Go to [https://resend.com](https://resend.com)
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Get Your API Key

1. After logging in, go to [https://resend.com/api-keys](https://resend.com/api-keys)
2. Click "Create API Key"
3. Give it a name (e.g., "Quba AI Contact Form")
4. Copy the API key (starts with `re_`)

### Step 3: Configure Environment Variables

1. Create a `.env.local` file in your project root (if it doesn't exist)
2. Add the following variables:

```env
# Resend API Configuration
RESEND_API_KEY="re_your_api_key_here"

# Email addresses
RESEND_FROM_EMAIL="onboarding@resend.dev"
CONTACT_TO_EMAIL="your-email@example.com"
```

**Important Notes:**
- Replace `re_your_api_key_here` with your actual API key from Step 2
- Replace `your-email@example.com` with the email where you want to receive contact form inquiries
- `RESEND_FROM_EMAIL` can be `onboarding@resend.dev` for testing (Resend's default)
- For production, you'll want to verify your own domain (see Step 4)

### Step 4: Verify Your Domain (Optional - for Production)

For production use, you should verify your own domain:

1. Go to [https://resend.com/domains](https://resend.com/domains)
2. Click "Add Domain"
3. Enter your domain (e.g., `example.com`)
4. Add the DNS records provided by Resend to your domain's DNS settings
5. Wait for verification (usually takes a few minutes)
6. Update `RESEND_FROM_EMAIL` in your `.env.local` to use your verified domain:
   ```env
   RESEND_FROM_EMAIL="noreply@yourdomain.com"
   ```

### Step 5: Test the Contact Form

1. Restart your Next.js development server:
   ```bash
   npm run dev
   ```
2. Navigate to your contact form
3. Fill out and submit the form
4. Check your email inbox (the one specified in `CONTACT_TO_EMAIL`)

## Environment Variables Reference

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `RESEND_API_KEY` | ✅ Yes | Your Resend API key | `re_abc123...` |
| `CONTACT_TO_EMAIL` | ✅ Yes | Where to send contact form inquiries | `you@example.com` |
| `RESEND_FROM_EMAIL` | ❌ No | Sender email address (defaults to `onboarding@resend.dev`) | `noreply@yourdomain.com` |

## Troubleshooting

### Emails Not Sending?

1. **Check API Key**: Make sure `RESEND_API_KEY` is set correctly in `.env.local`
2. **Check Email Address**: Verify `CONTACT_TO_EMAIL` is a valid email address
3. **Check Console**: Look at your server console for error messages
4. **Check Resend Dashboard**: Go to [https://resend.com/emails](https://resend.com/emails) to see email logs

### "Invalid API Key" Error

- Make sure your API key starts with `re_`
- Verify you copied the entire key (they're long!)
- Check that there are no extra spaces or quotes in your `.env.local` file

### "Domain Not Verified" Error

- For testing, use `onboarding@resend.dev` as `RESEND_FROM_EMAIL`
- For production, verify your domain in the Resend dashboard

### Rate Limits

- Free tier: 100 emails/day, 3,000 emails/month
- If you exceed limits, upgrade your Resend plan or wait for the limit to reset

## Alternative Free Email Services

If you prefer a different service, here are other free options:

### Brevo (formerly Sendinblue)
- **Free Tier**: 300 emails/day
- **Setup**: SMTP-based, works with nodemailer
- **Website**: [https://www.brevo.com](https://www.brevo.com)

### SendGrid
- **Free Tier**: 100 emails/day
- **Setup**: API or SMTP
- **Website**: [https://sendgrid.com](https://sendgrid.com)

## Support

- Resend Documentation: [https://resend.com/docs](https://resend.com/docs)
- Resend Support: [https://resend.com/support](https://resend.com/support)

