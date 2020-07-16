import React, {memo, useState, useEffect} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import {theme} from '../core/theme';
import {emailValidator, passwordValidator} from '../core/utils';
import {Navigation} from '../types';
import socketService from '../services/socketConnections.service';

type Props = {
  navigation: Navigation;
};

const LoginScreen = ({navigation}: Props) => {
  const [email, setEmail] = useState({value: '', error: ''});
  const [pass, setPassword] = useState({value: '', error: ''});
  // const [loginDetails, setLoginDetails] = useState([]);

  const _onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(pass.value);

    if (emailError || passwordError) {
      setEmail({...email, error: emailError});
      setPassword({...pass, error: passwordError});
      return;
    }
    // loginDetails.map(({username, password}) => {
    //   console.log(username, password);
    //   if (email === username && pass === password) {
    //     navigation.navigate('Dashboard');
    //   }
    // });

    if (email.value === 'muhammadmoiz@gmail.com' && pass.value === 'testpass') {
      navigation.navigate('Dashboard');
    }
  };

  // useEffect(() => {
  //   socketService.setupSocketConnection();
  //   socketService.requestLoginDetails();
  //   setLoginDetails(socketService.responseLoginDetails());
  // });

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('HomeScreen')} />

      <Logo />

      <Header>Welcome back.</Header>

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({value: text, error: ''})}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={pass.value}
        onChangeText={(text) => setPassword({value: text, error: ''})}
        error={!!pass.error}
        errorText={pass.error}
        secureTextEntry
      />

      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPasswordScreen')}>
          <Text style={styles.label}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

      <Button mode="contained" onPress={_onLoginPressed}>
        Login
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default memo(LoginScreen);
