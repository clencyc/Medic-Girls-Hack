import React from 'react';
import '../Contact/Contact.css';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();

  return (
    <div className='contactpage'>
      <h1>{t('contactUs')}</h1>

      <form id='contact-form' method="POST">
        <label htmlFor='name'>{t('fullName')}</label>
        <input name='name' placeholder={t('enterFullName')} type="text" />

        <label htmlFor='email'>{t('email')}</label>
        <input name='email' placeholder={t('enterEmail')} type="email" />

        <label htmlFor='message'>{t('message')}</label>
        <textarea name="message" cols="30" rows="10" placeholder={t('enterMessage')} required></textarea>

        <button type='submit'>{t('sendMessage')}</button>
      </form>
    </div>
  );
}

export default Contact;
