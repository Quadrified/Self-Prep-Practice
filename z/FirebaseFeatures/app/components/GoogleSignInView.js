import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Button } from 'react-native-paper';

const GoogleSignInView = ({ userInfo, onSignOut }) => {
  console.log('>>>userInfo in Google View<<<', userInfo);
  return (
    <View style={styles.container}>
      <View style={styles.infoCard}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: userInfo.photoURL }}
            style={styles.profilePicture}
          />
        </View>
        <View style={styles.userInfo}>
          <Text
            style={[
              styles.text,
              {
                alignItems: 'flex-start',
                fontWeight: 'bold',
                paddingHorizontal: 0,
                fontSize: 18,
              },
            ]}>
            Name:{' '}
          </Text>
          <Text style={[styles.text, { paddingHorizontal: 5, fontSize: 18 }]}>
            {userInfo.displayName}
          </Text>
        </View>
        <View style={styles.userInfo}>
          <Text
            style={[
              styles.text,
              { fontWeight: 'bold', paddingHorizontal: 0, fontSize: 18 },
            ]}>
            Email:{' '}
          </Text>
          <Text style={[styles.text, { paddingHorizontal: 5, fontSize: 18 }]}>
            {userInfo.email}
          </Text>
        </View>
        <View style={styles.signOutContainer}>
          <Button mode="contained" onPress={onSignOut} color="#E63B2A">
            Sign out
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    width: '100%',
  },
  infoCard: {
    padding: '8%',
    borderRadius: 18,
    backgroundColor: '#28343E',
    elevation: 50,
  },
  text: {
    padding: 10,
  },
  signOutContainer: {
    marginVertical: 15,
  },
  imageContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  profilePicture: {
    width: 150,
    height: 150,
    resizeMode: 'stretch',
    borderRadius: 18,
  },
  userInfo: {
    flexDirection: 'row',
  },
});

export default GoogleSignInView;
