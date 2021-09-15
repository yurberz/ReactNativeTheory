import React, {Component} from 'react';

import LoginScreen from './src/screens/LoginScreen';
import ProfileScreen from './src/screens/ProfileScreen';

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
