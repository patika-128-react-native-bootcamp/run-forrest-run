import {StyleSheet} from 'react-native';
import spacing from '../../styles/spacing';
import fontSizes from '../../styles/fontSizes';
import colors from '../../styles/colors';
import radius from '../../styles/radius';

const base_style = StyleSheet.create({
  container: {
    margin: spacing.tiny,
    padding: spacing.normal,
    borderRadius: radius.small,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontWeight: 'bold',
  },
});

export default {
  primary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: colors.themeColor,
    },
    label: {
      ...base_style.label,
      color: 'white',
    },
  }),

  secondary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      borderWidth: 1,
      borderColor: colors.themeColor,
    },
    label: {
      ...base_style.label,
      color: colors.themeColor,
    },
  }),

  roundPrimary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: colors.themeColor,
      width: 150,
      height: 150,
      borderRadius: 75,
    },
    label: {
      ...base_style.label,
      color: 'white',
      fontSize: fontSizes.huge,
    },
  }),

  roundSecondary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      borderWidth: 2,
      borderColor: colors.themeColor,
      width: 150,
      height: 150,
      borderRadius: 75,
    },
    label: {
      ...base_style.label,
      color: colors.themeColor,
      fontSize: fontSizes.huge,
    },
  }),
};
