import React, {useState} from 'react';
import ContainerLayout from '@components/common/ContainerLayout';

import NoSavedPages from '@components/common/NoSavedItems';
import SavedItems from '@components/others/DashBoard/SavedItems';

const FavoritesScreen = () => {
  const [showSavedItems, setShowSavedItems] = useState(true);

  return (
    <ContainerLayout
      headerTitle={'Saved Items'}
      showFooter
      isFlex={!showSavedItems}>
      {showSavedItems ? <SavedItems /> : <NoSavedPages />}
    </ContainerLayout>
  );
};

export default FavoritesScreen;
