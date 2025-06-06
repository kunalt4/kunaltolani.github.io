# EmailJS Setup Guide

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Set Up Email Service

1. In your EmailJS dashboard, click **"Add New Service"**
2. Choose your email provider (Gmail, Outlook, etc.)
3. Follow the setup wizard to connect your email account
4. **Copy the Service ID** - you'll need this

## Step 3: Create Email Template

1. Go to **"Email Templates"** in your dashboard
2. Click **"Create New Template"**
3. Use this template structure:

### Template Content:
```
Subject: New message from {{from_name}} - Portfolio Contact

Hi Kunal,

You have received a new message from your portfolio website:

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

### Template Variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{message}}` - The message content
- `{{to_email}}` - Your email (kunal@kunaltolani.com)

4. **Copy the Template ID** - you'll need this

## Step 4: Get Public Key

1. Go to **"Account"** → **"General"**
2. Find your **Public Key**
3. **Copy the Public Key** - you'll need this

## Step 5: Update Configuration

Edit `src/services/emailService.ts` and replace the placeholders:

```typescript
const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_actual_service_id',     // Replace with your Service ID
  TEMPLATE_ID: 'your_actual_template_id',   // Replace with your Template ID
  PUBLIC_KEY: 'your_actual_public_key',     // Replace with your Public Key
};
```

## Step 6: Test and Deploy

1. Save your changes
2. Test locally: `npm run dev`
3. Fill out the contact form to test
4. Deploy: `npm run deploy`

## Free Tier Limits

- **200 emails per month**
- **2 email services**
- **3 email templates**

Perfect for a personal portfolio website!

## Troubleshooting

If emails aren't sending:

1. **Check browser console** for error messages
2. **Verify all IDs** are correctly copied from EmailJS dashboard
3. **Check spam folder** - first emails might go to spam
4. **Test template** in EmailJS dashboard first

## Security Note

The public key is safe to expose in client-side code. EmailJS is designed for frontend use and includes rate limiting and anti-spam protection. 