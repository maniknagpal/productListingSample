import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux'; // Import useSelector to access Redux store
import Home from '../screens/Home';
import LoginScreen from '../screens/LoginScreen';
import {LOGOUT} from '../redux/actions/authActions';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
// import ProductDetailsScreen from './ProductDetailsScreen'; // Uncomment if you have the ProductDetailsScreen component

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="Login"
      component={LoginScreen}
      options={{headerShown: false}}
    />
  </AuthStack.Navigator>
);

const MainStackScreen = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    Alert.alert(
      'Logout Confirmation', // Title of the alert
      'Are you sure you want to logout?', // Message of the alert
      [
        {
          text: 'Cancel', // Cancel button
          onPress: () => console.log('Logout canceled'), // Optional: Log cancellation
          style: 'cancel', // Sets the button's style to "cancel"
        },
        {
          text: 'Yes', // Confirm button
          onPress: () => {
            dispatch({type: LOGOUT}); // Dispatch the logout action
          },
        },
      ],
      {cancelable: true}, // Allows the alert to be dismissed by tapping outside of it
    );
  };
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="ProductListing"
        component={Home}
        options={{
          title: 'Product Listing',
          headerTitleAlign: 'center',
          headerRight: () => (
            <TouchableOpacity style={{marginRight: 15}} onPress={handleLogout}>
              <Image
                source={require('../assets/images/logout.png')}
                style={{height: 22, width: 22, resizeMode: 'contain'}}
              />
            </TouchableOpacity>
          ),
        }}
      />
      {/* Uncomment and add navigation to the product details screen */}
      <MainStack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{title: 'Product Details'}}
      />
    </MainStack.Navigator>
  );
};

const AppNavigator = () => {
  const {isAuthenticated, token} = useSelector(state => state.auth);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isAuthenticated) {
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, [isAuthenticated]);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {isAuthenticated && token ? <MainStackScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  );
};

// Styles for loading spinner
const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});

export default AppNavigator;
