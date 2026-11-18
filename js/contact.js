/* Contact page: form validation, confirmation message, and ?product= prefill */

async function submitContactForm() {
  const name = document.getElementById('cf-name').value.trim();
  const email = document.getElementById('cf-email').value.trim();
  const subject = document.getElementById('cf-subject').value;
  const message = document.getElementById('cf-message').value.trim();
  const errBox = document.getElementById('form-error');
  const btn = document.getElementById('cf-submit');
  const label = document.getElementById('submit-label');

  errBox.style.display = 'none';

  if (!name || !email || !subject || !message) {
    errBox.textContent = 'Please fill in all fields before sending.';
    errBox.style.display = 'block';
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errBox.textContent = 'Please enter a valid email address.';
    errBox.style.display = 'block';
    return;
  }

  btn.disabled = true;
  label.textContent = 'Sending...';

  // Show success state immediately for good UX
  document.getElementById('contact-form-inner').style.display = 'none';
  const successEl = document.getElementById('contact-success');
  successEl.classList.add('visible');

  // Generate the confirmation email copy using Claude
  const subjectLabels = {
    product: 'product question',
    order: 'order or shipping enquiry',
    wholesale: 'wholesale / bulk order enquiry',
    coa: 'Certificate of Analysis request',
    other: 'general enquiry'
  };

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        messages: [{
          role: 'user',
          content: `Write a warm, professional auto-reply confirmation email for a cosmetics raw ingredients company called CAS Chemical LLC The customer's name is "${name}", their topic is "${subjectLabels[subject] || 'general enquiry'}", and their message was: "${message}".

The email should:
- Be addressed to ${name} by first name
- Confirm we have received their message
- Reference their specific topic briefly and naturally
- Promise a reply within one business day
- Be warm and human, not robotic
- End with "Warm regards, The CAS Chemical LLC Team"
- Be 3-5 short paragraphs
- Use plain text only (no markdown, no asterisks, no bullet points)

Return ONLY the email body text, starting directly with "Hi ${name.split(' ')[0]}," — no subject line, no preamble.`
        }]
      })
    });

    const data = await response.json();
    const emailText = data.content && data.content[0] ? data.content[0].text : null;

    if (emailText) {
      document.getElementById('email-preview-text').textContent = emailText;
      document.getElementById('email-preview-text').classList.remove('loading');
    } else {
      document.getElementById('email-preview-text').textContent = `Hi ${name.split(' ')[0]},\n\nThank you for getting in touch with CAS Chemical LLC. We have received your message and will get back to you as soon as possible — usually within one business day.\n\nWarm regards,\nThe CAS Chemical LLC Team`;
      document.getElementById('email-preview-text').classList.remove('loading');
    }
  } catch (e) {
    document.getElementById('email-preview-text').textContent = `Hi ${name.split(' ')[0]},\n\nThank you for getting in touch with CAS Chemical LLC. We have received your message and will get back to you as soon as possible — usually within one business day.\n\nWarm regards,\nThe CAS Chemical LLC Team`;
    document.getElementById('email-preview-text').classList.remove('loading');
  }
}

function resetContactForm() {
  document.getElementById('cf-name').value = '';
  document.getElementById('cf-email').value = '';
  document.getElementById('cf-subject').value = '';
  document.getElementById('cf-message').value = '';
  document.getElementById('contact-success').classList.remove('visible');
  document.getElementById('contact-form-inner').style.display = 'block';
  document.getElementById('cf-submit').disabled = false;
  document.getElementById('submit-label').textContent = 'Send message';
  document.getElementById('email-preview-text').textContent = 'Generating your confirmation email...';
  document.getElementById('email-preview-text').classList.add('loading');
}

// Pre-fill the form when arriving from an ingredient's "Request pricing" button
(function () {
  const product = getQueryParam('product');
  if (!product) return;
  document.getElementById('cf-subject').value = 'product';
  document.getElementById('cf-message').value = `Hi, I'd like pricing and availability for ${product}.`;
})();
