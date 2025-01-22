import {Text, View, StyleSheet} from 'react-native';
import React from 'react';

import ContainerLayout from '@components/common/ContainerLayout';
import ButtonInput from '@components/common/ButtonInput';

import typography from '@assets/fonts/typography';
import {colors} from '@constants/colors';

import SearchBox from '@components/others/DashBoard/Home/Search/Search';
import CarouselBox from '@components/others/DashBoard/Home/Carousel';
import Categories from '@components/others/DashBoard/Home/Categories';
import SavedItems from '@components/others/DashBoard/SavedItems';

const DashBoardScreen = () => {
  return (
    <ContainerLayout showFooter>
      <View style={styles.header}>
        <View>
          <Text style={styles.locationHeader}>Location</Text>
          <Text style={styles.locationText}>Yangon, Myanmar</Text>
        </View>
        <ButtonInput
          icon={require('@assets/icons/noti.png')}
          imgStyle={{width: 28, height: 28}}
        />
      </View>

      <SearchBox />
      <CarouselBox />
      <Categories />
      <SavedItems />
    </ContainerLayout>
  );
};

export default DashBoardScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 28,
  },
  locationHeader: {
    color: colors.gray,
    fontFamily: typography.inter24Regular,
    fontSize: 16,
  },
  locationText: {
    color: colors.black,
    fontFamily: typography.inter24Regular,
    fontSize: 18,
  },
});
