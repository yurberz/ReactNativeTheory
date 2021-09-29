import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';
import {ISubscriberCellProps} from '../../helpers/ts-helpers/interfaces';

const SubscriberCell: React.FC<ISubscriberCellProps> = ({
  subscriber,
  appendComponent,
}) => {
  return (
    <View style={styles.cell}>
      <View style={styles.leftSideBlock}>
        <Image source={subscriber.image} style={styles.image} />
        <View style={styles.textBlock}>
          <Text style={styles.title}>{subscriber.title}</Text>
          <Text style={styles.description}>{subscriber.description}</Text>
        </View>
      </View>

      {appendComponent}
    </View>
  );
};

export default SubscriberCell;
