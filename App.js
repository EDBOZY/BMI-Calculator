import { StyleSheet, View } from 'react-native';
import Bmicalculator from './src';
export default function App() {
  return (
    <View style={styles.container}>
      <Bmicalculator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
