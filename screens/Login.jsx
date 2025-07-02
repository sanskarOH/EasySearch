import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Footer from '../components/Footer';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleLogin = () => {
    Alert.alert('Login Attempted', `Email: ${email}\nPassword: ${password}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>EasySearch</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Email</Text>
        <View style={styles.inputForm}>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            placeholderTextColor="#aaa"
          />
        </View>

        <Text style={styles.label}>Password</Text>
        <View style={styles.inputForm}>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor="#aaa"
          />
        </View>

        <View style={styles.flexRow}>
          <View style={styles.checkboxContainer}>
            <CheckBox value={remember} onValueChange={setRemember} tintColors={{ true: '#2d79f3', false: '#ccc' }} />
            <Text style={styles.checkboxLabel}>Remember me</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.forgot}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.buttonSubmit} onPress={handleLogin}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <Text style={styles.centeredText}>
          Don’t have an account? <Text style={styles.span}>Sign Up</Text>
        </Text>

        <Text style={styles.divider}>Or With</Text>

        <View style={styles.flexRow}>
          <TouchableOpacity style={[styles.btn, { backgroundColor: '#fff' }]}>
            <Text style={styles.btnText}>Google</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer/>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 20 : 60,
    backgroundColor: '#fff',

  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
    color: '#000',
  },
  form: {
    marginHorizontal: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 5,
  },
  label: {
    color: '#151717',
    fontWeight: '600',
    marginBottom: 5,
  },
  inputForm: {
    borderWidth: 1.5,
    borderColor: '#ecedec',
    borderRadius: 10,
    height: 50,
    paddingLeft: 10,
    justifyContent: 'center',
    marginBottom: 15,
  },
  input: {
    fontSize: 16,
    height: '100%',
    color: '#000',
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginLeft: 6,
    fontSize: 14,
    color: '#000',
  },
  forgot: {
    color: '#2d79f3',
    fontSize: 14,
    fontWeight: '500',
  },
  buttonSubmit: {
    backgroundColor: '#151717',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
  },
  centeredText: {
    textAlign: 'center',
    color: '#000',
    fontSize: 14,
    marginTop: 5,
  },
  span: {
    color: '#2d79f3',
    fontWeight: '500',
  },
  divider: {
    textAlign: 'center',
    color: '#999',
    marginVertical: 10,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    borderColor: '#ededef',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 16,
    fontWeight: '500',
  },
});
