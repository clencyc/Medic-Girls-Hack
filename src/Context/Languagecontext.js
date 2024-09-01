// src/context/LanguageContext.js
import React, { createContext, useState } from 'react';
import i18n from '../i18n'; // Assuming you're using i18next for translations

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(i18n.language);

    const changeLanguage = (lang) => {
        setLanguage(lang);
        i18n.changeLanguage(lang);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
