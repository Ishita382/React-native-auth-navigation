import {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import 'react-native-url-polyfill/auto';
import {createClient} from '@supabase/supabase-js';

export default function SignUp() {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [mailReceived, setMailReceived] = useState(false);
  console.log(email, 'email');
  console.log(password, 'password');

  const supabase = createClient(
    'https://kjwbpxjkxgkwjaxtiznn.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtqd2JweGpreGdrd2pheHRpem5uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ5NTY1NDEsImV4cCI6MjAyMDUzMjU0MX0.HKU5zNjp3Oky90OiRl-TJ95zzmz15KbZKQnJ-z32QYI',
  );

  const signUpUser = async () => {
    const {data, error} = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    console.log(JSON.stringify(data.user?.confirmation_sent_at), 'data');
    console.log(error, 'error');
    if (data.user?.confirmation_sent_at) setMailReceived(true);
  };

  return (
    <View style={styles.box}>
      <Text>Enter Email:</Text>
      <TextInput
        value={email}
        onChangeText={onChangeEmail}
        style={styles.input}
      />
      <Text>Enter Password:</Text>
      <TextInput
        value={password}
        onChangeText={onChangePassword}
        style={styles.input}
      />
      <Button title="Sign Up" onPress={signUpUser} />
      <View>
        <Text>Enter Phone number:</Text>
        <TextInput
          value={email}
          onChangeText={onChangeEmail}
          style={styles.input}
        />
        <Text>Enter Otp sent to you on email:</Text>
        <TextInput
          value={password}
          onChangeText={onChangePassword}
          style={styles.input}
        />
        <Button title="Sign Up" onPress={signUpUser} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    width: 300,
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
  },
});
