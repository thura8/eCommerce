import {colors} from '@constants/colors';
import {formatMoney} from 'accounting-js';

export const formattedMoney = amount =>
  amount
    ? formatMoney(amount, {
        symbol: '$',
        precision: 2,
        thousand: ',',
        decimal: '.',
        format: '%s%v',
      })
    : undefined;

export const getButtonProps = activeTabIndex => {
  switch (activeTabIndex) {
    case 0:
      return {text: 'Ongoing', color: colors.blue};
    case 1:
      return {text: 'Delivered', color: colors.green};
    case 2:
      return {text: 'Review', color: colors.gray};
    default:
      return {text: '', color: colors.black};
  }
};
