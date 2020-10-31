import React from 'react';
import {useFormikContext} from 'formik';
import AppTextInput from './AppText';
import AppErrorMessage from './AppErrorMessage';

function AppFormField({name}) {
  return (
    <>
      <AppTextInput
        // icon="form-textbox-password"
        // placeholder="Password"
        // autoCapitalize="none"
        // autoCorrect={false}
        // secureTextEntry
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
