import {StyleSheet} from 'react-native';
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
  statisticsTextView: {
    alignItems: 'center',
  },
  statisticsText: {
    color: 'white',
    fontSize: 50,
  },
  valuesView: {
    flex: 1,
    alignItems: 'center',
  },
  distance: {
    fontSize: 100,
    color: colors.themeColor,
  },
  metersText: {
    fontSize: 30,
    color: 'white',
  },
  time: {
    color: colors.themeColor,
    fontSize: 60,
    marginTop: 15,
  },
});
