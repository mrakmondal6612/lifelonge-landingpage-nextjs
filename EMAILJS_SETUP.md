# EmailJS Setup Instructions

## Step 1: Create EmailJS Account

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Sign up or log in with your Google account (use **lifelongcareerconsultancy@gmail.com**)

## Step 2: Add Email Service

1. Click **"Add New Service"**
2. Select **Gmail**
3. Click **"Connect Account"** and authorize with your Gmail
4. Copy the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Templates

### Template 1: FAQ Form (for user queries)

1. Click **"Email Templates"** → **"Create New Template"**
2. Template Name: `FAQ Query`
3. Template Content:
   ```
   Subject: New FAQ Query from {{from_name}}

   From: {{from_name}}
   Email: {{from_email}}
   Phone: {{phone}}
   Subject: {{subject}}

   Message:
   {{message}}
   ```
4. Copy the **Template ID** (e.g., `template_faq123`)

### Template 2: Registration Form

1. Create another template
2. Template Name: `New Registration`
3. Template Content:
   ```
   Subject: New Registration from {{from_name}}

   Name: {{from_name}}
   Email: {{from_email}}
   Phone: {{phone}}
   Address: {{address}}
   ```
4. Copy the **Template ID** (e.g., `template_reg456`)

## Step 4: Get Public Key

1. Go to **"Account"** → **"General"**
2. Copy your **Public Key** (e.g., `abcXYZ123`)

## Step 5: Create .env.local File

1. Create a file named `.env.local` in your project root
2. Add these lines (replace with your actual values):

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_FAQ_TEMPLATE_ID=template_faq123
NEXT_PUBLIC_EMAILJS_REGISTER_TEMPLATE_ID=template_reg456
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abcXYZ123
```

## Step 6: Test the Forms

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Test both forms:
   - FAQ form at `/#faqs`
   - Register Now form at `/#contact`

3. Check your email (**lifelongcareerconsultancy@gmail.com**) for submissions

## Troubleshooting

- **Not receiving emails?** Check your EmailJS dashboard for failed requests
- **Error messages?** Verify all IDs are correct in `.env.local`
- **Gmail blocking?** Make sure you authorized EmailJS in your Gmail settings

## Important Notes

- Free tier allows **200 emails/month**
- Emails arrive within 1-2 minutes
- Check spam folder if not receiving emails
- Keep your `.env.local` file private (it's already in .gitignore)
