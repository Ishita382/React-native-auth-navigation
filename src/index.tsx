import {Button, Text, View} from 'react-native';

export default function Home() {
  return (
    <View>
      <View>
        <Text>Welcome to my new React Native App</Text>
      </View>
      <View>
        <Text>Lets continue by signing up</Text>
      </View>
      <View>
        <Button title="Sign Up" />
      </View>
    </View>
  );
}
