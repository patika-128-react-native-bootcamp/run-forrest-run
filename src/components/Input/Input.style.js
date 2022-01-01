import {StyleSheet} from 'react-native';
import spacing from '../../styles/spacing';
import radius from '../../styles/radius';

export default StyleSheet.create({
  container: {
    margin: spacing.tiny,
    padding: spacing.tiny,
  },
  inputContainer: {
    backgroundColor: '#e0e0e0',
    padding: spacing.tiny,
    borderRadius: radius.small,
  },
  label: {
    fontWeight: 'bold',
  },
  input: {
    padding: spacing.tiny,
  },
});
