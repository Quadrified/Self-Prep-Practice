import React from 'react';
import {StyleSheet} from 'react-native';
import * as Yup from 'yup';
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  AppSubmitButton,
} from '../components/Forms';
import Screen from '../components/Screen';
import colors from '../configs/colors';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.string().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.string().required().nullable().label('Category'),
});

let initialValues = {
  title: '',
  price: '',
  description: '',
  category: null,
};

const categories = [
  {label: 'Furniture', value: 1},
  {label: 'Clothing', value: 2},
  {label: 'Camera', value: 3},
];

function ListingEditScreen(props) {
  return (
    <Screen>
      <AppForm
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}>
        <AppFormField name="title" placeholder="Title" autoCorrect={false} />
        <AppFormField
          name="price"
          placeholder="Price"
          maxLength={8}
          autoCorrect={false}
          keyboardType="number-pad"
        />
        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
          style={styles.placeholder}
        />
        <AppFormField
          name="title"
          placeholder="Title"
          multiline={true}
          numberOfLines={3}
          autoCorrect={false}
          maxLength={255}
        />
        <AppSubmitButton title="Post" style={styles.button} />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
  },
  placeholder: {
    color: colors.medium,
  },
});

export default ListingEditScreen;
