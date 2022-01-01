import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
import fontSizes from '../../../styles/fontSizes';
import spacing from '../../../styles/spacing';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: spacing.normal,
  },
  valueFrame: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.micro,
  },
  label: {
    fontSize: fontSizes.big,
    fontWeight: 'bold',
    color: colors.textColor,
  },
  value: {
    fontSize: fontSizes.huge,
    fontWeight: 'bold',
    color: colors.textColor,
  },
});
