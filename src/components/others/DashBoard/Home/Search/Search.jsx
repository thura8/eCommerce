import {StyleSheet, View} from 'react-native';
import React from 'react';

import ButtonInput from '@components/common/ButtonInput';
import {colors} from '@constants/colors';
import {useNavigation} from '@react-navigation/native';

const SearchBox = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ButtonInput
        btnCtnStyle={styles.searchInputContainer}
        icon={require('@assets/icons/search.png')}
        imgStyle={styles.searchIcon}
        btnTxt="Find your favorite items"
        btnTxtStyle={styles.searchText}
        onPress={() => navigation.navigate('Search')}
      />
      <ButtonInput
        icon={require('@assets/icons/camera.png')}
        imgStyle={styles.actionIcon}
      />
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginVertical: 28,
    borderRadius: 8,
    backgroundColor: colors.bgCart,

    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  searchInputContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 300,
  },
  searchIcon: {
    width: 28,
    height: 28,
    marginRight: 14,
  },
  searchText: {
    marginLeft: 14,
    color: colors.gray,
    fontSize: 15,
  },
  actionIcon: {
    width: 28,
    height: 28,
  },
});
