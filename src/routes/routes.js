import LoginScreen from '@screens/Authentication/LoginScreen';
import SignUpScreen from '@screens/Authentication/SignUpScreen';
import CartScreen from '@screens/DashBoard/Cart/CartScreen';
import DashBoardScreen from '@screens/DashBoard/Home/DashBoardScreen';
import MyOrderScreen from '@screens/DashBoard/Orders/MyOrderScreen';
import ProductScreen from '@screens/DashBoard/Product_Details/ProductScreen';
import FavoritesScreen from '@screens/DashBoard/Favorites/SavedPagesScreen';
import AccountScreen from '@screens/UserAccount/AccountScreen';

import {AccountNavigator} from './Navigator';
import SearchScreen from '@screens/DashBoard/Search/SearchScreen';

export const authNavigations = [
  {
    name: 'Login',
    component: LoginScreen,
  },
  {
    name: 'SignUp',
    component: SignUpScreen,
  },
];

export const dashboardNavigations = [
  {
    name: 'Home',
    component: DashBoardScreen,
  },
  {
    name: 'Search',
    component: SearchScreen,
  },
  {
    name: 'Favorites',
    component: FavoritesScreen,
  },
  {
    name: 'Cart',
    component: CartScreen,
  },
  {
    name: 'Orders',
    component: MyOrderScreen,
  },
  {
    name: 'Product',
    component: ProductScreen,
  },
  {
    name: 'Account',
    component: AccountNavigator,
  },
];

export const accountNavigations = [
  {
    name: 'AccountMain',
    component: AccountScreen,
  },
];
