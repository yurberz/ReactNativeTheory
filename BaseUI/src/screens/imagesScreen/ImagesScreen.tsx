import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ListRenderItemInfo,
  ActivityIndicator,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import styles from './styles';
import {TPhotoModel} from '../../helpers/ts-helpers/types';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';
import useDebounce from '../../hooks/useDebounce';
import {photos, loading} from '../../redux/selectors/photosSeletor';
import {
  fetchPhotos,
  addLike,
  deleteLike,
  searchPhotos,
} from '../../redux/actions/async/photosOperations';
import BackgroundForm from '../../components/backgroudForm/BackgroundForm';
import Header from '../../components/header/Header';
import ImageCell from '../../components/imageCell/ImageCell';
import FilledButton from '../../components/filledButton/FilledButton';
import SearchInput from '../../components/searchInput/SearchInput';
import {clearImagesData} from '../../redux/reducers/photosReducer';
import SortBar from '../../components/sortBar/SortBar';

const ImagesScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const images = useAppSelector(photos);
  const isLoading = useAppSelector(loading);
  const [page, setPage] = useState<number>(1);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState('');
  const [isSearchData, setIsSearchData] = useState<boolean>(false);
  const [order_by, setOrder_by] = useState('latest');
  const debouncedInputValue = useDebounce(inputValue, 500);

  useEffect(() => {
    setRefreshing(true);
    dispatch(fetchPhotos({page, order_by}));
    setRefreshing(false);
  }, [dispatch, page, order_by]);

  useEffect(() => {
    if (debouncedInputValue) {
      dispatch(searchPhotos(debouncedInputValue));
    }
  }, [debouncedInputValue, dispatch]);

  const refreshImages = () => {
    setPage(1);
  };

  const handleGetImages = () => {
    setPage(page + 1);
  };

  const onBlur = () => {
    if (inputValue.length === 0) {
      setIsSearchData(false);
      dispatch(fetchPhotos({page, order_by}));
    }
  };

  const onChangeValue = (value: string) => {
    setIsSearchData(true);
    setInputValue(value);

    if (!isSearchData) {
      dispatch(clearImagesData());
    }
  };

  const addLikeToPhoto = (id: string) => {
    dispatch(addLike([id]));
  };

  const deleteLikeToPhoto = (id: string) => {
    dispatch(deleteLike([id]));
  };

  const renderItem = ({item}: ListRenderItemInfo<TPhotoModel>) => {
    return (
      <ImageCell
        imageUrl={item.imageUrl}
        headerProps={{
          profileUrl: item.profileImageUrl,
          authorName: item.name,
        }}
        footerProps={{
          likes: item.likes,
          onPress: item.isLiked
            ? () => deleteLikeToPhoto(item.id)
            : () => addLikeToPhoto(item.id),
        }}
      />
    );
  };

  const ListEmptyComponent = () => {
    return (
      <View style={styles.emptyContainerStyle}>
        <Text style={styles.emptyTextStyle}>No images yet</Text>
      </View>
    );
  };

  const ItemSeparatorComponent = () => {
    return <View style={styles.itemSeparatorStyle} />;
  };

  const ListFooterComponent = () => {
    if (images?.length > 0) {
      return (
        <View style={styles.flatListFooterStyle}>
          {isLoading ? (
            <ActivityIndicator size="small" />
          ) : (
            <FilledButton title="MOAR" onPress={handleGetImages} />
          )}
        </View>
      );
    } else {
      return null;
    }
  };

  return (
    <BackgroundForm
      viewStyle={styles.viewStyle}
      prependComponent={
        <>
          <Header title="Images" titleStyle={styles.headerTitleStyle} />
          <SearchInput
            value={inputValue}
            placeholder="Search images..."
            onChangeText={onChangeValue}
            onFocus={(evt: NativeSyntheticEvent<TextInputChangeEventData>) =>
              onChangeValue(evt.nativeEvent.text)
            }
            onBlur={onBlur}
          />
        </>
      }>
      {!isSearchData && (
        <SortBar
          data={[
            {id: '1', title: 'latest'},
            {id: '2', title: 'oldest'},
            {id: '3', title: 'popular'},
          ]}
          onValueChange={value => {
            setOrder_by(value);
            dispatch(fetchPhotos({page, order_by}));
          }}
        />
      )}

      {!isSearchData ? (
        <FlatList
          style={styles.flatListStyle}
          data={images}
          keyExtractor={(_, index) => String(index)}
          renderItem={renderItem}
          ListEmptyComponent={ListEmptyComponent}
          ItemSeparatorComponent={ItemSeparatorComponent}
          ListFooterComponent={ListFooterComponent}
          refreshing={refreshing}
          onRefresh={refreshImages}
        />
      ) : (
        <FlatList
          style={styles.flatListStyle}
          data={images}
          keyExtractor={(_, index) => String(index)}
          renderItem={renderItem}
          ListEmptyComponent={ListEmptyComponent}
          ItemSeparatorComponent={ItemSeparatorComponent}
        />
      )}
    </BackgroundForm>
  );
};

export default ImagesScreen;
