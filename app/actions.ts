'use server';

export async function submitContactForm(formData: { name: string; email: string; message: string }) {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  if (!formId || formId === 'your_id_here') {
    return { 
      success: false, 
      error: 'Form configuration missing. Please add your Formspree ID to .env.local.' 
    };
  }

  // Clean the ID
  const cleanId = formId.split('/').pop()?.trim();

  try {
    const response = await fetch(`https://formspree.io/f/${cleanId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        _subject: `New Portfolio Inquiry from ${formData.name}`,
      }),
    });

    if (response.ok) {
      return { success: true };
    } else {
      const errorData = await response.json();
      return { 
        success: false, 
        error: errorData.errors?.[0]?.message || 'Failed to send message.' 
      };
    }
  } catch (error) {
    return { success: false, error: 'Network error. Please try again later.' };
  }
}
