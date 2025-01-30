import { View, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function NotFoundScreen() {
  return (
   
      <View >
          <Stack.Screen options={{ title: 'Oops! Not Found' }} />
        <Link href="/(tabs)/index" >
          Go back to Home screen!
        </Link>
      </View>
   
  );
}