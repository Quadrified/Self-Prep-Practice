import React, { useState, useRef } from 'react';
import { View, ScrollView, Keyboard, StyleSheet, Linking } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Button, HelperText, TextInput, IconButton } from 'react-native-paper';
import AppColors from './AppColors';

const WhatsAppDirectChat = () => {
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const barcodeInputRef = useRef();
  const secondaryInputRef = useRef('');

  const validateBarcode = () => {
    console.log('>>>Phone<<<', phoneNumber);
    console.log('>>>Message<<<', message);
    if (!phoneNumber || phoneNumber.length > 10) {
      setIsError(true);
      barcodeInputRef.current.focus();
      return;
    }
    openWhatsApp();
    Keyboard.dismiss();
  };

  const openWhatsApp = () => {
    const encodedMessage = encodeURIComponent(message);

    if (phoneNumber) {
      if (message) {
        let url =
          'whatsapp://send?text=' + encodedMessage + '&phone=91' + phoneNumber;
        Linking.openURL(url)
          .then(data => {
            console.log('WhatsApp Opened successfully ' + data);
          })
          .catch(() => {
            alert('Make sure WhatsApp installed on your device');
          });
      } else {
        alert('Please enter message to send');
      }
    } else {
      alert('Please enter mobile no');
    }
  };

  return (
    <ScrollView
      nestedScrollEnabled
      keyboardShouldPersistTaps="handled"
      bounces={false}
      contentContainerStyle={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          ref={barcodeInputRef}
          mode="outlined"
          theme={{ roundness: 7, colors: { primary: '#005A9C' } }}
          style={styles.input}
          outlineColor={AppColors.lightGray}
          label="Enter a phone number"
          value={phoneNumber}
          onChangeText={number => {
            setPhoneNumber(number);
            setIsError(false);
          }}
          error={isError}
          onBlur={() => {
            !phoneNumber && setIsError(true);
          }}
          returnKeyType="next"
          blurOnSubmit={false}
          autoCorrect={false}
          autoCapitalize="none"
          autoCompleteType="off"
          onSubmitEditing={() => {
            secondaryInputRef.current.focus();
          }}
          right={
            isError && (
              <TextInput.Icon name="alert-circle" color={AppColors.textError} />
            )
          }
        />
        {isError && (
          <HelperText type="error" visible={isError} padding="normal">
            Enter a valid barcode ID
          </HelperText>
        )}

        <View style={styles.secondaryInputContainer}>
          <TextInput
            ref={secondaryInputRef}
            mode="outlined"
            theme={{ roundness: 7, colors: { primary: '#005A9C' } }}
            style={styles.input}
            outlineColor={AppColors.lightGray}
            label="Enter a message (optional)"
            value={message}
            onChangeText={name => setMessage(name)}
            returnKeyType="go"
            autoCorrect={false}
            autoCapitalize="words"
            autoCompleteType="off"
            onSubmitEditing={validateBarcode}
          />
        </View>

        <View style={styles.sendButtonContainer}>
          <Button
            icon="send"
            mode="contained"
            onPress={validateBarcode}
            color="#005A9C"
            labelStyle={styles.sendButtonLabel}
            style={styles.sendButton}>
            Send
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.background,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  scanInstructionsContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  inputContainer: {
    paddingHorizontal: 5,
    marginVertical: 5,
  },
  secondaryInputContainer: {
    marginVertical: 5,
  },
  input: {
    width: wp('90%'),
    backgroundColor: AppColors.white,
    fontSize: 17,
  },
  addCardButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    marginTop: 10,
  },
  addCardButtonText: {
    fontSize: 16,
    padding: 0,
  },
  sendButtonContainer: {
    marginVertical: 10,
  },
  sendButtonLabel: {
    padding: 5,
  },
  sendButton: {
    borderRadius: 5,
  },
});

export default WhatsAppDirectChat;
