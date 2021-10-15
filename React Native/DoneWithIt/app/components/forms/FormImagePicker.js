import {ErrorMessage} from 'formik';
import React from 'react';
import ImageInputList from '../ImageInputList';

function FormImagePicker(props) {
  return (
    <>
      <ImageInputList />
      <ErrorMessage />
    </>
  );
}

export default FormImagePicker;
