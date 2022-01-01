import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
import fontSizes from '../../../styles/fontSizes';
import spacing from '../../../styles/spacing';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: spacing.small,
    backgroundColor: '#7dd5f7',
    marginVertical: spacing.large,
    borderRadius: 50,
    width: Dimensions.get('window').width / 1.1,
  },
});
