import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

//import { store } from './redux/store';
import store from './redux/store';

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import 'expo-dev-menu';

import { useRoute } from "./router"

const loadApplication = async () => {
  await Font.loadAsync({
    'DMMono-Regular': require('./assets/fonts/DMMono-Regular.ttf'),
  });
};

export default function App() {
  const [isReady, setIsReady] = useState(false);
 //  const routing = useRoute(true);
 const routing = useRoute(false);

 

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
   <NavigationContainer>
       {routing}
      </NavigationContainer>
    </Provider>
    </>
  );
}
