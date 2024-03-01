import * as React from 'react';

interface EmailTemplateProps {
  email: string;
  subject: string;
  message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,subject,message
}) => (
  <div>
    <h1>{subject}!</h1>
    <p>{message}</p>
    <p>Response message to {email}</p>
  </div>
);
