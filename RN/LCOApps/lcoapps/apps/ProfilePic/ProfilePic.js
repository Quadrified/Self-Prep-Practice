/**
 * 5th App
 * The ProfilePic app teaches to handle camera in React Native.
 * Dives into conditional rendering (like if and else) => {(condition) ? (Return this) : (Resturb this )}.
 * Teaches how to handle permissions in React Native.
 * Camera library used => React-native-camera :  https://github.com/react-native-camera/react-native-camera
 */

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  StatusBar,
  Image,
} from 'react-native';

import { RNCamera } from 'react-native-camera';

const PendingView = () => (
  <View style={styles.pendingView}>
    <Text style={styles.loadingText}>Loading...</Text>
  </View>
);

function ProfilePic(props) {
  const [image, setImage] = useState(null);

  const takePicture = async (camera) => {
    try {
      const options = { quality: 0.9, base64: false };
      const data = await camera.takePictureAsync(options);
      console.log(data);
      setImage(data.uri);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <StatusBar backgroundColor="#0A79Df" />
      <View style={styles.container}>
        {image ? (
          <View style={styles.preview}>
            <Text style={styles.camText}>Here is your new profile pic</Text>
            <Image
              style={styles.clickedImage}
              source={{ uri: image, width: '100%', height: '80%' }}
            />
            <Button
              title="Click new picture"
              onPress={() => {
                setImage(null);
              }}
            />
          </View>
        ) : (
          <RNCamera
            style={styles.preview}
            type={RNCamera.Constants.Type.front}
            captureAudio={false}
            flashMode="off"
            androidCameraPermissionOptions={{
              title: 'Permission to access camera',
              message: 'Allow the app to use camera',
              buttonPositive: 'OK',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to access audio',
              message: 'Allow the app to use audio',
              buttonPositive: 'OK',
              buttonNegative: 'Cancel',
            }}>
            {({ camera, status }) => {
              if (status !== 'READY') return <PendingView />;
              return (
                <View style={styles.captureConatiner}>
                  <TouchableOpacity
                    style={styles.capture}
                    onPress={() => takePicture(camera)}>
                    <Text>SNAP</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          </RNCamera>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#0A79Df',
  },
  pendingView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    fontSize: 28,
    color: 'crimson',
  },
  preview: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  captureConatiner: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    width: 100,
  },
  capture: {
    flex: 1,
    backgroundColor: 'orange',
    padding: 20,
    borderRadius: 10,
    textAlign: 'center',
    alignItems: 'center',
    shadowColor: '#393E46',
    elevation: 5,
  },
  camText: {
    backgroundColor: '#3498DB',
    color: '#FFF',
    marginBottom: 10,
    width: '100%',
    textAlign: 'center',
    paddingVertical: 20,
    fontSize: 20,
  },
  clickedImage: {
    width: 300,
    height: 300,
    borderRadius: 150,
  },
});

export default ProfilePic;
