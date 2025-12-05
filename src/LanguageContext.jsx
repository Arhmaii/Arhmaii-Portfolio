import React, { createContext, useContext, useMemo, useState } from 'react';

const LanguageContext = createContext({
  lang: 'zh',
  setLang: () => {},
  toggleLang: () => {}
});

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(/** @type {'zh' | 'en'} */ ('zh'));

  const toggleLang = () => setLang((prev) => (prev === 'zh' ? 'en' : 'zh'));

  const value = useMemo(() => ({ lang, setLang, toggleLang }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);
