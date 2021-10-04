import React, {useState} from 'react';
import {Text, View} from 'react-native';
import SortButton from './sortButton/SortButton';
import styles from './styles';
import {ISortBarProps} from '../../helpers/ts-helpers/interfaces';

const SortBar: React.FC<ISortBarProps> = ({data, onValueChange}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <View style={styles.sortBarContainer}>
      <Text style={styles.text}>sort by:</Text>

      {data.map((item, i: number) => (
        <SortButton
          key={item.id}
          text={item.title}
          id={i}
          selectedIndex={selectedIndex}
          cb={(id: number) => {
            setSelectedIndex(id);

            if (onValueChange) {
              onValueChange(item.title);
            }
          }}
        />
      ))}
    </View>
  );
};

export default SortBar;
