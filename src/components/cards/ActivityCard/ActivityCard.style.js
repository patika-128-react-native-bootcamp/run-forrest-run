import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
import fontSizes from '../../../styles/fontSizes';
import spacing from '../../../styles/spacing';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  weatherIcon: {
    width: 90,
    height: 90,
  },
});
