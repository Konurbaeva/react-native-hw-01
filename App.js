import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';


import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import 'expo-dev-menu';

import { useRoute } from "./router"

const loadApplication = async () => {
  await Font.loadAsync({
    'DMMono-Regular': require('./assets/fonts/DMMono-Regular.ttf'),
  });
};

// const useRoute = isAuth => {
//   if (!isAuth) {
//     return (
//       <AuthStack.Navigator>
//         <AuthStack.Screen
//           name="Register"
//           component={RegistrationScreen}
//           options={{
//             headerShown: false,
//           }}
//         />
//         <AuthStack.Screen name="Login" component={LoginScreen} />
//       </AuthStack.Navigator>
//     );
//   }
//   return (
//     <>
//       <MainTab.Screen name="Posts" component={PostsScreen} />
//       <MainTab.Screen name="Create" component={CreatePostsScreen} />
//       <MainTab.Screen name="Profile" component={ProfileScreen} />
//     </>
//   );
// };

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const routing = useRoute(true);

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
      <NavigationContainer>
       {routing}
      </NavigationContainer>
    </>
  );
}
