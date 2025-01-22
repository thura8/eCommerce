import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import typography from '@assets/fonts/typography';
import {colors} from '@constants/colors';
import ButtonInput from '@components/common/ButtonInput';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        'https://dummyjson.com/products/category-list',
      );
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching product categories:', error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const formatCategoryName = name =>
    name.replace(/-/g, ' ').split(' ').join('\n');

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Categories</Text>
        <ButtonInput btnTxt="See All" btnTxtSty={styles.seeAllText} />
      </View>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <ButtonInput
            btnCtnStyle={styles.item}
            icon={{
              uri: `https://dummyjson.com/image/150`,
            }}
            imgStyle={styles.itemImage}
            btnTxt={formatCategoryName(item)}
            btnTxtStyle={styles.itemText}
            onPress={() => console.log(`Selected category: ${item}`)}
          />
        )}
        keyExtractor={item => item}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  headerText: {
    fontFamily: typography.fontRegular,
    fontSize: 16,
    color: colors.black,
  },
  seeAllText: {
    fontFamily: typography.inter24Regular,
    color: colors.gray,
  },
  item: {
    alignItems: 'center',
    paddingHorizontal: 17,
    borderRadius: 12,
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 5,
  },
  itemImage: {
    width: 50,
    height: 50,
    marginBottom: 8,
    borderRadius: 25,
  },
  itemText: {
    fontFamily: typography.fontRegular,
    fontSize: 14,
    color: colors.black,
    textAlign: 'center',
  },
});
