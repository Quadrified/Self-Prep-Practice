# React Native Firebase 
- Get SHA1 key
```js
cd android && ./gradlew signingReport
```

- If debug key gives problem because of exisiting debug.keystore:
  - Command: <i>keytool -exportcert -keystore app/debug.keystore -list -v</i> 
  - Password: android
  
- For DEVELOPER_ERROR during Google Sign in:
  - Use webClientID from
  -      ```google-service.json --> client --> oauth_client --> "client_type": 3
     ```