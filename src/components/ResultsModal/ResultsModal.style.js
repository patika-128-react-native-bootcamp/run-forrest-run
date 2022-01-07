import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import spacing from '../../styles/spacing';
import radius from '../../styles/radius';

export default StyleSheet.create({
  modalView: {
    flex: 1,
    paddingVertical: spacing.large,
    paddingHorizontal: spacing.small,
    borderRadius: radius.normal,
    borderWidth: 3,
    borderColor: colors.themeColor,
    backgroundColor: 'black',
    justifyContent: 'space-between',
  },
  valuesView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  map: {
    height: Dimensions.get('window').height / 3,
    width: '100%',
  },
});
