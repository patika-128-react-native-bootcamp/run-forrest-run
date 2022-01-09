import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import spacing from '../../styles/spacing';
import radius from '../../styles/radius';

export default StyleSheet.create({
  modalView: {
    borderRadius: radius.normal,
    borderWidth: 3,
    borderColor: 'white',
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'space-between',
  },
  valuesView: {
    flexDirection: 'row',
    marginTop: spacing.large,
    justifyContent: 'space-around',
  },
  buttonsContainer: {
    marginBottom: spacing.normal,
    padding: spacing.micro,
  },
});
