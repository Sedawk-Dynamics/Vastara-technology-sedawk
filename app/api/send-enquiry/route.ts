import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { fullName, phone, email, interestedIn, message } = body

    // Validate required fields
    if (!fullName || !email || !message) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email to Vastara
    const mailOptions = {
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: `New Enquiry from ${fullName} - Vastara International Properties`,
      html: `
        <h2>New Enquiry from Website</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Interested In:</strong> ${interestedIn || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>This is an automated email from Vastara International Properties website.</em></p>
      `,
      replyTo: email,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    // Confirmation email to user
    const confirmationEmail = {
      from: process.env.FROM_EMAIL,
      to: email,
      subject: 'Thank you for your enquiry - Vastara International Properties',
      html: `
        <h2>Thank You for Your Enquiry</h2>
        <p>Dear ${fullName},</p>
        <p>Thank you for reaching out to Vastara International Properties. We have received your enquiry and appreciate your interest in our projects.</p>
        <p>Our team will review your message and get back to you within 24 business hours.</p>
        <p><strong>Your Enquiry Details:</strong></p>
        <p><strong>Interested In:</strong> ${interestedIn || 'Not specified'}</p>
        <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p>Best regards,<br><strong>Vastara International Properties</strong></p>
        <p>Phone: +91 7030008011<br>Email: info@vastarainternationalproperties.com</p>
      `,
    }

    await transporter.sendMail(confirmationEmail)

    return Response.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Email sending error:', error)
    return Response.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    )
  }
}
