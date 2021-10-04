import React from 'react';
import {TextInput, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import {ISearchInputProps} from '../../helpers/ts-helpers/interfaces';

const SearchInput: React.FC<ISearchInputProps> = ({
  value,
  placeholder,
  onChangeText,
  onFocus,
  onBlur,
}) => {
  return (
    <View style={styles.inputContainer}>
      <FontAwesome name="search" size={20} color="#a9a9a9" />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onFocus={onFocus}
        onBlur={onBlur}
        autoCorrect={false}
      />
    </View>
  );
};

export default SearchInput;
