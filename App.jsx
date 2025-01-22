import React from 'react';
import MainNavigator from '@routes/Navigator';
import {I18nextProvider} from 'react-i18next';
import i18n from '@i18n/i18n';

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <MainNavigator />
    </I18nextProvider>
  );
};

export default App;
