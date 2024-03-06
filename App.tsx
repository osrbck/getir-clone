import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from "./src/screen/HomeScreen";
export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: '5%',
    marginHorizontal: '5%'
  },
});