import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './Forms.css';

const Forms = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, subject, message }),
    });

    if (response.ok) {
      alert('Email sent successfully!');
    } else {
      alert('Failed to send email.');
    }
  };

  return (
    <div className='forms'>
      <div className='dispo'></div>
      <div className='formulaire'>
        <h1 id='contact'>Contact</h1>
        <input
          className='email'
          type='email'
          placeholder='Votre Email:'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className='subject'
          type='text'
          placeholder='Objet:'
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <div className="editor-container">
          <CKEditor
            editor={ClassicEditor}
            data={message}
            onChange={(event, editor) => {
              const data = editor.getData();
              setMessage(data);
            }}
          />
        </div>
        <button className='envoyer' onClick={handleSubmit}>Envoyer</button>
      </div>
    </div>
  );
};

export default Forms;





