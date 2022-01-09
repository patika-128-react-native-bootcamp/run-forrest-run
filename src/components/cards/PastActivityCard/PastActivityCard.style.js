import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
import fontSizes from '../../../styles/fontSizes';
import radius from '../../../styles/radius';
import spacing from '../../../styles/spacing';

export default StyleSheet.create({
  itemContainer: {
    marginVertical: 30,
    alignItems: 'center',
  },
  dateView: {
    alignItems: 'center',
    padding: spacing.micro,
    borderWidth: 2,
    borderColor: 'white',
    borderBottomWidth: 0,
    backgroundColor: 'white',
    width: '50%',
    borderTopRightRadius: radius.small,
    borderTopLeftRadius: radius.small,
  },
  date: {
    color: '#11928e',
    fontSize: fontSizes.big,
  },
  valuesView: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
    borderTopRightRadius: radius.small,
    borderTopLeftRadius: radius.small,
    padding: spacing.small,
    backgroundColor: 'rgba(0, 0, 0, 0.3);',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  metersText: {
    color: 'white',
    fontSize: fontSizes.big,
  },
  valueSeperator: {
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: radius.normal,
    height: '100%',
  },
  detailsButton: {
    alignItems: 'center',
    padding: spacing.small,
    borderWidth: 2,
    borderColor: 'white',
    borderBottomWidth: 0,
    backgroundColor: 'white',
    width: '90%',
    borderBottomRightRadius: radius.small,
    borderBottomLeftRadius: radius.small,
  },
  buttonView: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: '#11928e',
    fontSize: fontSizes.big,
    fontWeight: '700',
  },
});
