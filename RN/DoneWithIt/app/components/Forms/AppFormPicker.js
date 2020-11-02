import React from 'react';
import {useFormikContext} from 'formik';

import AppPicker from '../AppPicker';
import AppErrorMessage from './AppErrorMessage';

function AppFormPicker({items, name, placeholder, style}) {
  const {errors, setFieldValue, touched, values} = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        style={style}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
