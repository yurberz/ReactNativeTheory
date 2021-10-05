import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ListRenderItemInfo,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import {TPhotoModel} from '../../helpers/ts-helpers/types';
import imageApi from '../../services/ImageApi';
import BackgroundForm from '../../components/backgroudForm/BackgroundForm';
import Header from '../../components/header/Header';
import ImageCell from '../../components/imageCell/ImageCell';
import FilledButton from '../../components/filledButton/FilledButton';
import {IPhotoDataResponse} from '../../helpers/ts-helpers/interfaces';

const ImagesScreen: React.FC = () => {
  const [state, setState] = useState<TPhotoModel[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await imageApi.fetchPhotos(page);

        const data = response.map(item => ({
          id: item.id,
          imageUrl: item.urls?.small,
          profileImageUrl: item.user?.profile_image?.small,
          name: item.user?.name,
          isLiked: item.liked_by_user,
          likes: item.likes,
        }));

        setState(data);

        if (page > 1) {
          setState([...state, ...data]);
        }
      } catch (err) {
        console.log(err);
      }
    };

    setIsLoading(true);
    setRefreshing(true);
    fetchImages();
    setIsLoading(false);
    setRefreshing(false);
  }, [page]);

  const getImages = () => {
    setPage(1);
  };

  const handleRefresh = () => {
    setPage(page + 1);
  };

  const updateLike = (value: IPhotoDataResponse, id: string) => {
    const updateData = state.map(item => {
      if (item.id === id) {
        return (item = {
          ...item,
          isLiked: value.photo?.liked_by_user,
          likes: value.photo?.likes,
        });
      } else {
        return item;
      }
    });

    setState(updateData);
  };

  const addLike = async (id: string) => {
    await imageApi.likePhoto(id).then(value => updateLike(value, id));
  };

  const deleteLike = async (id: string) => {
    await imageApi.unlikePhoto(id).then(value => updateLike(value, id));
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
            ? () => deleteLike(item.id)
            : () => addLike(item.id),
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
    return (
      <View style={styles.flatListFooterStyle}>
        {isLoading ? (
          <ActivityIndicator size="small" />
        ) : (
          <FilledButton title="MORE" onPress={handleRefresh} />
        )}
      </View>
    );
  };

  return (
    <BackgroundForm
      viewStyle={styles.viewStyle}
      prependComponent={
        <Header title="Images" titleStyle={styles.headerTitleStyle} />
      }>
      <FlatList
        style={styles.flatListStyle}
        data={state}
        keyExtractor={(_, index) => String(index)}
        renderItem={renderItem}
        ListEmptyComponent={ListEmptyComponent}
        ItemSeparatorComponent={ItemSeparatorComponent}
        ListFooterComponent={ListFooterComponent}
        refreshing={refreshing}
        onRefresh={getImages}
      />
    </BackgroundForm>
  );
};

export default ImagesScreen;
