import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PeoplePage from './src/pages/PeoplePage';
import PeopleDetaisPage from './src/pages/PeopleDetaisPage';
import { capitalizeFirstLetter } from './src/util';

const AppNavigator = createStackNavigator({
  'Main': {
    screen: PeoplePage
  },
  'PeopleDetail': {
    screen: PeopleDetaisPage,
    navigationOptions: ({navigation}) => {
      const peopleName = capitalizeFirstLetter(navigation.state.params.people.name.first);
      return({
        title: peopleName,
        headerTitleStyle: {
          fontSize: 30,
          color: 'white'
        }
      });  
    }
  }
}, {
  defaultNavigationOptions: {
    title: 'Pessoas',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#1eb1ed',
      borderBottomWidth: 1,
      borderBottomColor: '#c5c5c5'
    },
    headerTitleStyle: {
      fontSize: 30,
      color: 'white',
      flexGrow: 1,
      textAlign: 'center'
    }
  }
});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;