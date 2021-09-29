import React, {Component} from 'react';
import AddPeopleScreen from './src/screens/addPeopleScreen/AddPeopleScreen';
import LoginScreen from './src/screens/loginScreen/LoginScreen';
import ProfileScreen from './src/screens/profileScreen/ProfileScreen';
import SubscribersScreen from './src/screens/subscribersScreen/SubscribersScreen';

class App extends Component {
  render() {
    return (
      <>
        {/* <LoginScreen /> */}
        {/* <ProfileScreen /> */}
        {/* <SubscribersScreen /> */}
        <AddPeopleScreen />
      </>
    );
  }
}

export default App;
