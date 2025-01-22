import {View, StatusBar, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-virtualized-view';
import React, {useEffect} from 'react';

import {isIos} from '@constants/common';
import LoadingView from '../LoadingView';
import Header from '../Header';
import Footer from '../Footer';
import TotalPrice from '@components/others/DashBoard/TotalPrice';
import {colors} from '@constants/colors';

const ContainerLayout = ({
  children,
  headerTitle,
  showFooter = false,
  totalPrice,
  onCheckout,
  loading = false,
  bgColor = colors.bgwhite,
  contentContainerStyle,
  noScroll = false,
  translucentBar = isIos,
  paddingEnabled = true,
  barStyle = 'dark-content',
  statusBarBackgroundColor,
  isFlex = true,
}) => {
  useEffect(() => {
    StatusBar.setBarStyle(barStyle, true);

    if (!isIos) {
      StatusBar.setBackgroundColor(
        statusBarBackgroundColor ? statusBarBackgroundColor : 'transparent',
        true,
      );

      StatusBar.setTranslucent(true);
    }
  }, []);

  return (
    <View style={[styles.container, {backgroundColor: bgColor}]}>
      {loading && <LoadingView />}

      <View
        style={[
          styles.innerView,
          {
            marginTop: translucentBar ? 0 : 24,
            paddingHorizontal: paddingEnabled ? 16 : 0,
          },
          contentContainerStyle,
        ]}>
        {headerTitle && <Header title={headerTitle} />}
        {noScroll ? (
          <View style={{flex: 1}}>{children}</View>
        ) : (
          <ScrollView
            contentContainerStyle={isFlex ? {flexGrow: 1} : {}}
            showsVerticalScrollIndicator={false}>
            {children}
          </ScrollView>
        )}
      </View>

      {showFooter &&
        (headerTitle === 'Cart' ? (
          <TotalPrice total={totalPrice} onPress={onCheckout} />
        ) : (
          <Footer />
        ))}
    </View>
  );
};

export default ContainerLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerView: {
    flex: 1,
  },
});
