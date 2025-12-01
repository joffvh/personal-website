import * as React from 'react';

interface EmailTemplateProps {
    name: string;
    email: string;
    subject?: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name,
    email,
    subject,
    message,
}) => (
    <div>
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Subject:</strong> {subject || 'No subject'}</p>
        <hr />
        <h2>Message:</h2>
        <p style={{ whiteSpace: 'pre-wrap' }}>{message}</p>
    </div>
);
