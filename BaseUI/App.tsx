import React, {Component} from 'react';
import LoginScreen from './src/screens/loginScreen/LoginScreen';
import ProfileScreen from './src/screens/profileScreen/ProfileScreen';

class App extends Component {
  render() {
    return (
      <>
        {/* <LoginScreen /> */}
        <ProfileScreen />
      </>
    );
  }
}

export default App;
