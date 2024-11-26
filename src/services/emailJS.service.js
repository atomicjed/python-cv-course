import emailjs from '@emailjs/browser';

export async function sendHelpEmail(fromEmail, message) {
  const formData = {
    from_email: fromEmail,
    message: message
  };
  let responseStatus;
  
  await emailjs.send(
    import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
    import.meta.env.VITE_EMAIL_JS_HELP_ME_TEMPLATE_ID,
    formData,
    import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
  ).then((response) => {
    responseStatus = response.status;
    },
    (error) => {
      console.error('Error sending email:', error);
      responseStatus = 500;
    });
  
  return responseStatus;
}

export async function sendSubmissionEmail() {
  let responseStatus;

  await emailjs.send(
    import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
    import.meta.env.VITE_EMAIL_JS_SUBMISSION_TEMPLATE_ID,
    {},
    import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
  ).then((response) => {
      responseStatus = response.status;
    },
    (error) => {
      console.error('Error sending email:', error);
      responseStatus = 500;
    });

  return responseStatus;
}