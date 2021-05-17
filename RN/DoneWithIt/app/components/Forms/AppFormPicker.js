import React from 'react';
import { useFormikContext } from 'formik';

import AppPicker from '../AppPicker';
import AppErrorMessage from './AppErrorMessage';

function AppFormPicker({
  items,
  name,
  PickerItemComponent,
  placeholder,
  width,
  numberOfColumns,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)} // setting value of form field programatically
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
        PickerItemComponent={PickerItemComponent}
        numberOfColumns={numberOfColumns}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
