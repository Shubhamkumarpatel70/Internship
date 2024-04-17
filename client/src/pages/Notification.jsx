import React, { useState } from 'react';

function AdminNotificationForm() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleSendNotification = () => {
    // Logic to send notification, e.g., call an API
    console.log('Sending notification to users:', selectedUsers);
    // Reset form fields
    setSubject('');
    setMessage('');
    setSelectedUsers([]);
  };

  return (
    <div>
      <h2>Send Notification</h2>
      <form onSubmit={handleSendNotification}>
        <div>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        {/* UserSelection component goes here */}
        <button type="submit">Send Notification</button>
      </form>
    </div>
  );
}

export default AdminNotificationForm;
