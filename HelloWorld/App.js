import { StatusBar } from 'expo-status-bar'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Platform,
  StatusBar as RNStatusBar,
} from 'react-native'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 30 }}>Hello, World!</Text>
      <StatusBar style='auto' />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Platform.OS === 'android' ? RNStatusBar.currentHeight : 0,
  },
})
