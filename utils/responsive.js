import {Dimensions} from 'react-native';

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

const baseWidth = 411.42857142857144;
const baseHeight = 683.4285714285714;
const scaleWidth = deviceWidth / baseWidth;
const scaleHeight = deviceHeight / baseHeight;
const scale = Math.min(scaleWidth, scaleHeight);

const ScaledSize = size => {
  let res = Math.ceil(size, scale);
  return res;
};

const ScaledHeight = size => {
  let res = scaleHeight * size;
  return res;
};

const ScaledWidth = size => {
  let res = scaleWidth * size;
  return res;
};

export {ScaledSize, ScaledWidth, ScaledHeight};
