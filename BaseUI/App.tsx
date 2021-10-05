import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import ImagesScreen from './src/screens/imagesScreen/ImagesScreen';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ImagesScreen />
    </Provider>
  );
};

export default App;
