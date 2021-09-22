import React from 'react';
import {TextInput, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import {ISearchInputProps} from '../../helpers/ts-helpers/interfaces';

const SearchInput: React.FC<ISearchInputProps> = ({value, onChangeText}) => {
  return (
    <View style={styles.inputContainer}>
      <FontAwesome name="search" size={20} color="#a9a9a9" />
      <TextInput
        style={styles.input}
        placeholder="Search people..."
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default SearchInput;
