// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'; // Import the language detector

import translationEN from './locales/en/translation.json';
import translationSW from './locales/sw/translation.json';

const resources = {
    en: { translation: translationEN },
    sw: { translation: translationSW },
};

i18n
    .use(LanguageDetector) // Use the language detector
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
