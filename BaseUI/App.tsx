import React, {Component} from 'react';
import AddPeopleScreen from './src/screens/addPeopleScreen/AddPeopleScreen';
import LoginScreen from './src/screens/loginScreen/LoginScreen';
import ProfileScreen from './src/screens/profileScreen/ProfileScreen';
import SubscribersScreen from './src/screens/subscribersScreen/SubscribersScreen';
import ImagesScreen from './src/screens/imagesScreen/ImagesScreen';

class App extends Component {
  render() {
    return (
      <>
        {/* <LoginScreen /> */}
        {/* <ProfileScreen /> */}
        {/* <SubscribersScreen /> */}
        {/* <AddPeopleScreen /> */}
        <ImagesScreen />
      </>
    );
  }
}

export default App;
