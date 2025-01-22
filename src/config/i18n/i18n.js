import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import RNSecureKeyStore from 'react-native-secure-key-store';

import en from './locales/en.json';
import es from './locales/es.json';

const resources = {
  en: {translation: en},
  es: {translation: es},
};

const LANGUAGE_KEY = 'user_selected_language';

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
  debug: true,
});

const loadLanguage = async () => {
  try {
    const savedLanguage = await RNSecureKeyStore.get(LANGUAGE_KEY);
    savedLanguage && i18n.changeLanguage(savedLanguage);
  } catch (error) {
    console.log('Failed to load language: ', error);
  }
};

loadLanguage();

export const saveLanguage = async language => {
  try {
    await RNSecureKeyStore.set(LANGUAGE_KEY, language, {
      accessible: 'AccessibleAlways',
    });
  } catch (error) {
    console.log('Failed to save language: ', error);
  }
};

export default i18n;
