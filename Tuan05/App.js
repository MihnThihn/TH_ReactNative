import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Text, Image } from 'react-native';
import FirstScreen from "./Screens/Fscreen"
import ChooseColor from "./Screens/screenA"


const Stack = createNativeStackNavigator();
    
// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }
export default  function App() {
  return (
   <NavigationContainer>   
          <Stack.Navigator initialRouteName="FirstScreen"
        screenOptions={{
          headerShown: true,
        }}>
            
            
            <Stack.Screen name='home' component={FirstScreen}/>    
                {/*Stack.Screen các thành phần của màn hình  */}
                {/* component truyền màn hình (hàm) vào, sau đó đặt tên cho nó, rồi gọi ra bằng tên (name) */}
                <Stack.Screen name="Choose" component={ChooseColor} />

          </Stack.Navigator>

   </NavigationContainer>
  // //  <View style={styles.container}> 
  //       <Image source={require('./anh/vs_blue.png')} style = {{ width :'100%', height: '361px'} } />
  // //  </View>

  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

