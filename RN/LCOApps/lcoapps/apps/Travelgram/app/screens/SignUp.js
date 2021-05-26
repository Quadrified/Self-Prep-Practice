import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  Text,
  Container,
  Form,
  Item,
  Input,
  Button,
  Thumbnail,
  Content,
} from 'native-base';
import storage from '@react-native-firebase/storage';
import ProgressBar from 'react-native-progress';
import * as ImagePicker from 'react-native-image-picker';
import { options } from '../utils/options';

import propTypes from 'prop-types';
import { signUp } from '../action/auth';
import { connect } from 'react-redux';

const SignUp = ({ signUp, navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [instaUserName, setinstaUserName] = useState('');
  const [bio, setBio] = useState('');
  const [country, setCountry] = useState('');
  const [image, setImage] = useState(
    'https://avatars.githubusercontent.com/u/40802412?s=400&u=7c7d3bbcc40b19ad1a4ff9d2ea6a8e9bbbb57153&v=4',
  );
  const [imageUploading, setImageUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(null);

  const chooseImage = async () => {
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log(response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode === 'permission') {
        console.log('Please provide camera permissions');
      } else {
        console.log(response);
        uploadImage(response);
      }
    });
  };

  const uploadImage = async (response) => {
    setImageUploading(true);
    const ref = storage().ref(response.fileName);

    const task = ref.putFile(response.uri);

    // task is an observer
    task.on('state_changed', (taskSnapshot) => {
      const percentage =
        (taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) * 1000;

      setUploadStatus(percentage);
    });

    task.then(async () => {
      const url = await ref.getDownloadURL();

      setImage(url);
      setImageUploading(false);
    });
  };

  const onSignUp = async () => {
    signUp({
      name,
      instaUserName,
      bio,
      country,
      email,
      password,
      image,
    });
  };

  return (
    <Container style={styles.container}>
      <Content padder>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled">
          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={chooseImage}>
              <Thumbnail large source={{ uri: image }} />
            </TouchableOpacity>
          </View>

          {imageUploading && (
            <ProgressBar progress={uploadStatus} style={styles.progress} />
          )}

          <Form>
            <Item regular style={styles.formItem}>
              <Input
                placeholder="name"
                value={name}
                style={{ color: '#eee' }}
                onChangeText={(text) => setName(text)}
              />
            </Item>
            <Item regular style={styles.formItem}>
              <Input
                placeholder="email"
                value={email}
                style={{ color: '#eee' }}
                onChangeText={(text) => setEmail(text)}
              />
            </Item>
            <Item regular style={styles.formItem}>
              <Input
                placeholder="password"
                value={password}
                secureTextEntry={true}
                style={{ color: '#eee' }}
                onChangeText={(text) => setPassword(text)}
              />
            </Item>
            <Item regular style={styles.formItem}>
              <Input
                placeholder="Instagram user name"
                value={instaUserName}
                style={{ color: '#eee' }}
                onChangeText={(text) => setinstaUserName(text)}
              />
            </Item>
            <Item regular style={styles.formItem}>
              <Input
                placeholder="Your Short Bio"
                value={bio}
                style={{ color: '#eee' }}
                onChangeText={(text) => setBio(text)}
              />
            </Item>
            <Item regular style={styles.formItem}>
              <Input
                placeholder="country"
                value={country}
                style={{ color: '#eee' }}
                onChangeText={(text) => setCountry(text)}
              />
            </Item>
            <Button regular block onPress={onSignUp}>
              <Text>SignUp</Text>
            </Button>
          </Form>
        </ScrollView>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1b262c',
    flex: 1,
    justifyContent: 'flex-start',
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 5,
  },
  progress: { width: null, marginBottom: 20 },
  formItem: {
    marginBottom: 20,
  },
});

SignUp.propTypes = {
  signUp: propTypes.func.isRequired,
};

const mapDispatchToProps = {
  signUp: (data) => signUp(data),
};

export default connect(null, mapDispatchToProps)(SignUp);
