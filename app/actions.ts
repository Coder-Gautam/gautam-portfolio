'use server';

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

type ContactFormResult = {
  success: boolean;
  error?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getConfiguredFormspreeId() {
  const formId = process.env.FORMSPREE_FORM_ID || process.env.NEXT_PUBLIC_FORMSPREE_ID;

  if (!formId || formId === 'your_id_here') {
    return null;
  }

  return formId.split('/').pop()?.trim() || null;
}

async function sendWithResend({
  name,
  email,
  message,
  contactEmail,
}: ContactFormData & { contactEmail: string }): Promise<ContactFormResult> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return {
      success: false,
      error: 'Resend is not configured.',
    };
  }

  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>';
  const subject = `New Portfolio Inquiry from ${name}`;
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'User-Agent': 'gautam-portfolio-contact-form',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [contactEmail],
      reply_to: email,
      subject,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New Portfolio Inquiry</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    }),
  });

  if (response.ok) {
    return { success: true };
  }

  const errorData = await response.json().catch(() => null);
  return {
    success: false,
    error:
      errorData?.message ||
      errorData?.error ||
      'Email provider rejected the message. Please check your Resend configuration.',
  };
}

async function sendWithFormspree(formId: string, formData: ContactFormData): Promise<ContactFormResult> {
  const response = await fetch(`https://formspree.io/f/${formId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: formData.name,
      email: formData.email,
      message: formData.message,
      _replyto: formData.email,
      _subject: `New Portfolio Inquiry from ${formData.name}`,
    }),
  });

  if (response.ok) {
    return { success: true };
  }

  const errorData = await response.json().catch(() => null);
  return {
    success: false,
    error:
      errorData?.errors?.[0]?.message ||
      errorData?.message ||
      'Formspree rejected the message. Please check your form id and verified email.',
  };
}

export async function submitContactForm(formData: { name: string; email: string; message: string }) {
  const contactEmail = process.env.CONTACT_EMAIL || 'codergautam7@gmail.com';
  const name = formData.name.trim();
  const email = formData.email.trim();
  const message = formData.message.trim();

  if (!name || !email || !message) {
    return {
      success: false,
      error: 'Please fill in all required fields.',
    };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      success: false,
      error: 'Please enter a valid email address.',
    };
  }

  try {
    if (process.env.RESEND_API_KEY) {
      return await sendWithResend({ name, email, message, contactEmail });
    }

    const formspreeId = getConfiguredFormspreeId();

    if (formspreeId) {
      return await sendWithFormspree(formspreeId, { name, email, message });
    }

    return {
      success: false,
      error: `Contact form setup is pending. Please email me directly at ${contactEmail}.`,
    };
  } catch {
    return { success: false, error: 'Network error. Please try again later.' };
  }
}
