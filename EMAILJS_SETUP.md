# 📧 EmailJS Setup Guide

Your contact form is now configured with EmailJS! Follow these steps to make it functional:

## 🚀 **Step 1: Sign Up for EmailJS**

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create an account
3. Verify your email address

## 🔧 **Step 2: Create Email Service**

1. **In EmailJS Dashboard:**
   - Click "Email Services" → "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the authentication steps
   - **Copy the Service ID** (looks like: `service_abc123`)

## 📝 **Step 3: Create Email Template**

1. **In EmailJS Dashboard:**
   - Click "Email Templates" → "Create New Template"
   - Use this template content:

```html
Subject: New message from {{from_name}} via portfolio Hello {{to_name}}, You
have received a new message from your portfolio website: Name: {{from_name}}
Email: {{from_email}} Message: {{message}} You can reply directly to
{{reply_to}} Best regards, Your Portfolio Website
```

2. **Save the template and copy the Template ID** (looks like: `template_xyz789`)

## 🆔 **Step 4: Get Your User ID**

1. **In EmailJS Dashboard:**
   - Go to "Account" → "API Keys"
   - **Copy your Public Key** (looks like: `user_def456`)

## ⚙️ **Step 5: Update Configuration**

1. **Open `config/emailjs.js`**
2. **Replace the placeholder values:**

```javascript
export const emailjsConfig = {
  serviceId: "service_abc123", // Your actual Service ID
  templateId: "template_xyz789", // Your actual Template ID
  userId: "user_def456", // Your actual User ID
  templateParams: {
    to_name: "Gaurish Sood",
  },
};
```

## ✅ **Step 6: Test Your Form**

1. **Start your development server:** `npm run dev`
2. **Fill out the contact form**
3. **Submit and check your email**
4. **Check the browser console for any errors**

## 🔍 **Troubleshooting**

### **Common Issues:**

1. **"Service not found" error:**

   - Check your Service ID is correct
   - Ensure the service is active in EmailJS dashboard

2. **"Template not found" error:**

   - Check your Template ID is correct
   - Ensure template variables match what you're sending

3. **"User not found" error:**

   - Check your User ID is correct
   - Ensure your EmailJS account is verified

4. **Form submits but no email:**
   - Check your email spam folder
   - Verify email service authentication
   - Check browser console for errors

## 📱 **Template Variables Available**

Your form sends these variables to EmailJS:

- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{message}}` - Sender's message
- `{{to_name}}` - Your name (Gaurish Sood)
- `{{reply_to}}` - Sender's email (for reply)

## 🌐 **Deployment**

After setup:

1. **Test locally** to ensure emails work
2. **Commit and push** your changes
3. **Deploy to Vercel** - your contact form will work in production!

## 💰 **Pricing**

- **Free Tier:** 200 emails/month
- **Paid Plans:** Start at $15/month for 1,000 emails
- **Perfect for:** Portfolio websites (you'll likely stay under 200/month)

---

**Need Help?** Check EmailJS documentation or contact their support!
