import {Dimensions, Platform} from 'react-native';

import facebookIcon from '@assets/icons/facebook.png';
import googleIcon from '@assets/icons/google.png';
import homeIcon from '@assets/icons/home.png';
import heartIcon from '@assets/icons/black_heart.png';
import categoryIcon from '@assets/icons/category.png';
import accountIcon from '@assets/icons/account.png';
import cartIcon from '@assets/icons/cart.png';

import chair from '@assets/images/chair.jpg';
import chivasRegal from '@assets/images/chivas_regal.jpg';
import headPhone from '@assets/images/headphone.jpg';
import jacket from '@assets/images/khaki_jacket.jpg';
import watch from '@assets/images/watch.jpg';
import waterBottle from '@assets/images/water_bottles.jpg';
import womenJeans from '@assets/images/women_jeans.jpg';

//Platform constants
export const isIos = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

//Dimensions constants
export const Screen = Dimensions.get('screen');
export const Window = Dimensions.get('window');

export const authInputs = [
  {
    id: 1,
    title: 'Username',
    eye: false,
  },
  {
    id: 2,
    title: 'Email',
    eye: false,
  },
  {
    id: 3,
    title: 'Password',
    eye: true,
  },
];

export const authButtons = [
  {
    id: 1,
    icon: facebookIcon,
    value: 'Continue with facebook',
  },
  {
    id: 2,
    icon: googleIcon,
    value: 'Continue with Google',
  },
];

export const authSwitchOptions = [
  {
    id: 1,
    message: 'Dont have an account?',
    text: 'Sign Up',
  },
  {
    id: 2,
    message: 'Already have an account?',
    text: 'Sign In',
  },
];

export const bottomTabs = [
  {
    icon: homeIcon,
    name: 'Home',
  },

  {
    icon: heartIcon,
    name: 'Favorites',
  },
  {
    icon: cartIcon,
    name: 'Cart',
  },
  {
    icon: accountIcon,
    name: 'Account',
  },
];

export const savedProducts = [
  {
    imgURL: chair,
    name: 'Brown Chair',
    price: 300000,
    rating: 4.8,
  },
  {
    imgURL: headPhone,
    name: 'Sony HeadPhone',
    price: 280000,
    rating: 4.6,
  },
  {
    imgURL: jacket,
    name: 'Khaki Jacket(Men)',
    price: 75000,
    rating: 4.4,
  },
  {
    imgURL: waterBottle,
    name: 'Vintage Styled Water Bottles',
    price: 24000,
    rating: 4.8,
  },
  {
    imgURL: watch,
    name: 'Luxury Watch',
    price: 1000000,
    rating: 5.0,
  },
  {
    imgURL: chivasRegal,
    name: 'Chivas Regal',
    price: 89000,
    rating: 4.9,
  },
  {
    imgURL: womenJeans,
    name: 'Blue Jeans (Women)',
    price: 40000,
    rating: 4.6,
  },
];

export const orderOptions = [
  {name: 'Ongoing'},
  {name: 'Complete'},
  {name: 'Review'},
];

export const accountGeneral = [
  {
    icon: require('@assets/icons/user.png'),
    title: 'Account Details',
    subtitle: 'Edit your account information',
  },
  {
    icon: require('@assets/icons/magnetic_card.png'),
    title: 'Payment Method',
    subtitle: 'Add your credit or ddebit card',
  },
  {
    icon: require('@assets/icons/location.png'),
    title: 'Delivery Addresses',
    subtitle: 'Edit or add new addresses',
  },
];

export const accountSetting = [
  {
    icon: require('@assets/icons/noti.png'),
    title: 'Notifications',
    subtitle: 'Manage your notifications',
  },
  {
    icon: require('@assets/icons/globe.png'),
    title: 'Language',
    subtitle: '',
  },
  {
    icon: require('@assets/icons/info.png'),
    title: 'Privacy & Policy',
    subtitle: '',
  },
  {
    icon: require('@assets/icons/contact_us.png'),
    title: 'Contact us',
    subtitle: '',
  },
];

export const imagesSlide = [
  {
    id: 1,
    imgURL: require('@assets/images/product_deals/image_1.png'),
  },
  {
    id: 2,
    imgURL: require('@assets/images/product_deals/image_2.png'),
  },
  {
    id: 3,
    imgURL: require('@assets/images/product_deals/image_3.png'),
  },
];
