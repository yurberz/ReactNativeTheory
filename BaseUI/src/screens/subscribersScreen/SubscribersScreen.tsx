import React, {useState, useCallback} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import produce from 'immer';
import BackgroundForm from '../../components/backgroudForm/BackgroundForm';
import Header from '../../components/header/Header';
import SubscriberCell from '../../components/subscriberCell/SubscriberCell';
import FollowButton from '../../components/followButton/FollowButton';
import styles from './styles';
import {ISubscriberItem} from '../../helpers/ts-helpers/interfaces';
import {subscribersData} from '../../constants/dummyData';

const SubscribersScreen: React.FC = () => {
  const [subscribers, setSubscribers] =
    useState<ISubscriberItem[]>(subscribersData);

  const toggleFollow = useCallback((id: string) => {
    setSubscribers(
      produce(draft => {
        draft.find(item => {
          if (item.id === id) {
            item.isFollowing = !item.isFollowing;
          }
        });
      }),
    );
  }, []);

  const renderItem = ({item}: ListRenderItemInfo<ISubscriberItem>) => {
    return (
      <SubscriberCell subscriber={item}>
        <FollowButton
          subscriber={item}
          onPressFollowButton={() => toggleFollow(item.id)}
        />
      </SubscriberCell>
    );
  };

  return (
    <BackgroundForm
      viewStyle={styles.viewStyle}
      prependComponent={
        <Header title="Subscribers" titleStyle={styles.headerTitleStyle} />
      }>
      <FlatList
        data={subscribers}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.flatListStyle}
      />
    </BackgroundForm>
  );
};

export default SubscribersScreen;
