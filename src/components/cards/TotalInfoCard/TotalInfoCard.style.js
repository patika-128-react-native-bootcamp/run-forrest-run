import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
import fontSizes from '../../../styles/fontSizes';
import spacing from '../../../styles/spacing';

export default StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    padding: spacing.small,
    backgroundColor: 'rgba(0, 0, 30, 0.3);',
    borderRadius: 20,
    width: Dimensions.get('window').width / 1.1,
  },
});
