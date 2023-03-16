import { useEffect, useState } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './redux/store';

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import 'expo-dev-menu';
import Main from './components/Main';

const loadApplication = async () => {
  await Font.loadAsync({
    'DMMono-Regular': require('./assets/fonts/DMMono-Regular.ttf'),
  });
};

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <>
      <Provider store={store}>
       <Main/>
      </Provider>
    </>
  );
}
