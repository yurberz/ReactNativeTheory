import React, {useState, useCallback} from 'react';
import {
  Text,
  SectionListRenderItemInfo,
  SectionListData,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import produce from 'immer';
import {SwipeListView} from 'react-native-swipe-list-view';
import styles from './styles';
import {
  IAddPeopleState,
  IAddPeopleItem,
} from '../../helpers/ts-helpers/interfaces';
import {addPeopleData} from '../../constants/dummyData';
import useSearch from '../../hooks/useSearch';
import BackgroundForm from '../../components/backgroudForm/BackgroundForm';
import Header from '../../components/header/Header';
import SubscriberCell from '../../components/subscriberCell/SubscriberCell';
import CheckBox from '../../components/checkBox/CheckBox';
import SearchInput from '../../components/searchInput/SearchInput';

const AddPeopleScreen = () => {
  const [people, setPeople] = useState<IAddPeopleState[]>(addPeopleData);
  const [inputValue, setInputValue] = useState('');

  const toggleSelect = useCallback((id: string) => {
    setPeople(
      produce(draft => {
        draft.map(item => {
          return item.data.find(subItem => {
            if (subItem.id === id) {
              subItem.isSelected = !subItem.isSelected;
            }
          });
        });
      }),
    );
  }, []);

  const deleteRow = rowId => {
    const [section] = rowId.split('.');

    const newData = [...people];

    const prevIndex = filteredPeople[section].data.findIndex(
      item => item.id === rowId,
    );

    newData[section].data.splice(prevIndex, 1);

    setPeople(newData);
  };

  const filteredPeople = useSearch(people, inputValue);

  const onChangeValue = (value: string) => {
    setInputValue(value);
  };

  const renderHeader = ({
    section: {title},
  }: {
    section: SectionListData<IAddPeopleItem>;
  }) => {
    return <Text>{title}</Text>;
  };

  const renderItem = ({item}: SectionListRenderItemInfo<IAddPeopleItem>) => {
    return (
      <View style={styles.rowFront}>
        <SubscriberCell subscriber={item}>
          <CheckBox
            subscriber={item}
            onPressFollowButton={() => toggleSelect(item.id)}
          />
        </SubscriberCell>
      </View>
    );
  };

  const renderHiddenItem = ({
    item,
  }: SectionListRenderItemInfo<IAddPeopleItem>) => (
    <View style={styles.rowBack}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.backRightBtn}
        onPress={() => deleteRow(item.id)}>
        <FontAwesome name="trash" size={20} color="#000000" />
      </TouchableOpacity>
    </View>
  );

  return (
    <BackgroundForm
      viewStyle={styles.viewStyle}
      prependComponent={
        <>
          <Header title="Add people" titleStyle={styles.headerTitleStyle} />
          <SearchInput value={inputValue} onChangeText={onChangeValue} />
        </>
      }>
      <SwipeListView
        useSectionList
        sections={filteredPeople}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        renderSectionHeader={renderHeader}
        rightOpenValue={-70}
        disableRightSwipe
        previewRowKey={'0'}
        previewOpenValue={-40}
        previewOpenDelay={1500}
        keyExtractor={item => item.id}
      />
    </BackgroundForm>
  );
};

export default AddPeopleScreen;
