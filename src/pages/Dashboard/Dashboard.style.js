import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import spacing from '../../styles/spacing';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'black',
    flex: 1,
  },
  welcomeView: {
    padding: 8,
    backgroundColor: 'rgba(0, 0, 30, 0.3);',
    marginTop: 5,
    borderRadius: 20,
    alignItems: 'center',
    width: Dimensions.get('window').width / 1.1,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonView: {
    width: '95%',
  },
  logoutIcon: {
    margin: spacing.small,
  },
});
