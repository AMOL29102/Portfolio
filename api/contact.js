import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Please fill in all fields (name, email, message).' });
  }

  try {
    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify connection configuration (optional, can be removed for faster serverless response)
    // await transporter.verify();

    // Mail options
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Send it from the authorized account
      to: process.env.EMAIL_USER, // To the developer's email
      replyTo: email, // Reply-to should be the sender's email
      subject: `Portfolio Contact: Message from ${name}`,
      text: `You have received a new contact submission from your portfolio website.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <div style="margin-top: 20px; padding: 15px; bg-color: #f9f9f9; border-left: 4px solid #3b82f6; background: #f3f4f6; border-radius: 4px;">
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <hr style="margin-top: 30px; border: 0; border-top: 1px solid #e0e0e0;" />
          <p style="font-size: 12px; color: #888888; text-align: center;">Sent from your Portfolio Website Contact Form</p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Nodemailer Error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to send email. Please try again later.',
      details: error.message 
    });
  }
}
