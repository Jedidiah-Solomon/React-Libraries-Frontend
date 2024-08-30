`To: jedybrown9821@gmail.com`
`Subject: Welcome to Our Service!`

Text

```
Hi there,

Thank you for signing up for our service! We're excited to have you on board.

Best regards,
The Team
```

HTML

```
<html>
<body>
  <h1>Welcome to Our Service!</h1>
  <p>Hi there,</p>
  <p>Thank you for signing up for our service! We're excited to have you on board.</p>
  <p>Best regards,</p>
  <p><strong>The Team</strong></p>
</body>
</html>
```

## Info response object of Nodemailer

````
{
  messageId: '<abcd1234@example.com>',
  response: '250 OK',
  envelope: {
    from: 'youremail@example.com',
    to: 'recipient@example.com'
  },
  accepted: [ 'recipient@example.com' ],
  rejected: [],
  pending: []
}
```S
````

## Authenticate Your Email

SPF (Sender Policy Framework): Add an SPF record to your domain's DNS settings to specify which mail servers are allowed to send emails on behalf of your domain.

DKIM (DomainKeys Identified Mail): Set up DKIM to add a digital signature to your emails, allowing recipients' mail servers to verify that the email is legitimate.

DMARC (Domain-based Message Authentication, Reporting, and Conformance): Configure a DMARC record to help protect your domain from unauthorized use and provide instructions on how to handle failed SPF and DKIM checks.

Avoid Spammy Content
Subject Line and Body: Avoid using spammy phrases or excessive punctuation (e.g., "FREE!!!", "BUY NOW"). Be cautious with promotional language.

Monitoring Tools: Use tools like SenderScore or Google Postmaster Tools to monitor your sender reputation and address any issues.

Include Unsubscribe Links
Compliance: Include a clear and easy-to-find unsubscribe link in your emails to comply with anti-spam laws and reduce the likelihood of being marked as spam. 6. Check Your IP and Domain

## Testing Tools

Email Testing Tools: Use testing tools like Mailtrap or MailHog to test your email sending in development. These tools capture emails sent from your application without delivering them to real inboxes, allowing you to debug and refine your email content and setup.

## MAILTRAP

#### Credentials

Host

sandbox.smtp.mailtrap.io

Port

25, 465, 587 or 2525

Username

35fac55975edde

Password

`********9b6c`

Auth

PLAIN, LOGIN and CRAM-MD5

TLS

Optional (STARTTLS on all ports)

```
var transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "35fac55975edde",
    pass: "08e49ba24b9b6c"
  }
});
```

`https://mailtrap.io/inboxes` View test mails in your test inbox
