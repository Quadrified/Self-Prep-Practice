import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';
import CategoryPickerItem from '../components/CategoryPickerItem';
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  AppSubmitButton,
  FormImagePicker,
} from '../components/forms';
import Screen from '../components/Screen';
import colors from '../configs/colors';
import useGeoLocation from '../hooks/useGeoLocation';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.string().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.string().required().nullable().label('Category'),
  images: Yup.array().min(1, 'Please select at least one image'),
});

let initialValues = {
  title: '',
  price: '',
  description: '',
  category: null,
  images: [],
};

const categories = [
  {
    backgroundColor: '#fc5c65',
    icon: 'floor-lamp',
    label: 'Furniture',
    value: 1,
  },
  {
    backgroundColor: '#fd9644',
    icon: 'car',
    label: 'Cars',
    value: 2,
  },
  {
    backgroundColor: '#fed330',
    icon: 'camera',
    label: 'Cameras',
    value: 3,
  },
  {
    backgroundColor: '#26de81',
    icon: 'cards',
    label: 'Games',
    value: 4,
  },
  {
    backgroundColor: '#2bcbba',
    icon: 'shoe-heel',
    label: 'Clothing',
    value: 5,
  },
  {
    backgroundColor: '#45aaf2',
    icon: 'basketball',
    label: 'Sports',
    value: 6,
  },
  {
    backgroundColor: '#4b7bec',
    icon: 'headphones',
    label: 'Movies & Music',
    value: 7,
  },
  {
    backgroundColor: '#a55eea',
    icon: 'book-open-variant',
    label: 'Books',
    value: 8,
  },
  {
    backgroundColor: '#778ca3',
    icon: 'application',
    label: 'Other',
    value: 9,
  },
];

function ListingEditScreen(props) {
  // const location = useGeoLocation();
  console.log(location);
  return (
    <Screen style={{ flex: 1, padding: 5 }}>
      <AppForm
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}>
        <FormImagePicker name="images" />
        <AppFormField
          name="title"
          placeholder="Title"
          maxLength={255}
          autoCorrect={false}
        />
        <AppFormField
          name="price"
          placeholder="Price"
          maxLength={8}
          autoCorrect={false}
          keyboardType="number-pad"
          width={120}
        />
        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
          width="50%"
          PickerItemComponent={CategoryPickerItem}
          numberOfColumns={3}
        />
        <AppFormField
          name="description"
          placeholder="Description"
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
});

export default ListingEditScreen;
