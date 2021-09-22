import React, {useState} from 'react';
import {
  Text,
  SectionList,
  SectionListRenderItemInfo,
  SectionListData,
} from 'react-native';
import produce from 'immer';
import styles from './styles';
import {
  IAddPeopleState,
  IAddPeopleItem,
} from '../../helpers/ts-helpers/interfaces';
import {addPeopleData} from '../../constants/dummyData';
import BackgroundForm from '../../components/backgroudForm/BackgroundForm';
import Header from '../../components/header/Header';
import SubscriberCell from '../../components/subscriberCell/SubscriberCell';
import CheckBox from '../../components/checkBox/CheckBox';
import SearchInput from '../../components/searchInput/SearchInput';

const AddPeopleScreen = () => {
  const [people, setPeople] = useState<IAddPeopleState[]>(addPeopleData);
  const [inputValue, setInputValue] = useState('');

  const toggleSelect = (id: string) => {
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
      <SubscriberCell subscriber={item}>
        <CheckBox
          subscriber={item}
          onPressFollowButton={() => toggleSelect(item.id)}
        />
      </SubscriberCell>
    );
  };

  const filteredPeople = people.reduce(
    (result: IAddPeopleState[], sectionData) => {
      const normalizedFilter = inputValue.toLowerCase();
      const {title, data} = sectionData;

      const filteredData = data.filter(item =>
        item.title.toLowerCase().includes(normalizedFilter),
      );

      if (filteredData.length !== 0) {
        result.push({
          title,
          data: filteredData,
        });
      }

      return result;
    },
    [],
  );

  const onChangeValue = (value: string) => {
    setInputValue(value);
  };

  return (
    <BackgroundForm
      viewStyle={styles.viewStyle}
      prependComponent={
        <>
          <Header title="Add people" titleStyle={styles.headerTitleStyle} />
          <SearchInput value={inputValue} onChangeText={onChangeValue} />
        </>
      }>
      <SectionList
        sections={filteredPeople}
        renderSectionHeader={renderHeader}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </BackgroundForm>
  );
};

export default AddPeopleScreen;
