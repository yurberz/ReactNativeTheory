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

const ImagesScreen: React.FC = () => {
  const [state, setState] = useState<TPhotoModel[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const addLike = async (id: string) => {
    await imageApi.likePhoto(id).then(value => {
      const updatedData = state.map(item => {
        if (item.id === id) {
          return (item = {
            id: item.id,
            imageUrl: item.imageUrl,
            profileImageUrl: item.profileImageUrl,
            name: item.name,
            isLiked: value.photo?.liked_by_user,
            likes: value.photo?.likes,
          });
        } else {
          return item;
        }
      });

      setState(updatedData);
    });
  };

  const deleteLike = async (id: string) => {
    await imageApi.unlikePhoto(id).then(value => {
      const updatedData = state.map(item => {
        if (item.id === id) {
          return (item = {
            id: item.id,
            imageUrl: item.imageUrl,
            profileImageUrl: item.profileImageUrl,
            name: item.name,
            isLiked: value.photo?.liked_by_user,
            likes: value.photo?.likes,
          });
        } else {
          return item;
        }
      });

      setState(updatedData);
    });
  };

  const getImages = async () => {
    setPage(1);

    setRefreshing(true);

    await imageApi.fetchPhotos(page).then(values => {
      setState(
        values.map(value => ({
          id: value.id,
          imageUrl: value.urls?.small,
          profileImageUrl: value.user?.profile_image?.small,
          name: value.user?.name,
          isLiked: value.liked_by_user,
          likes: value.likes,
        })),
      );
    });

    setRefreshing(false);
  };

  const handleRefresh = async () => {
    setLoading(true);

    await imageApi
      .fetchPhotos(page)
      .then(values => {
        setPage(page + 1);

        setState([
          ...state,
          ...values.map(value => ({
            id: value.id,
            imageUrl: value.urls?.small,
            profileImageUrl: value.user?.profile_image?.small,
            name: value.user?.name,
            isLiked: value.liked_by_user,
            likes: value.likes,
          })),
        ]);
      })
      .catch(err => {
        console.log('fetch error:', err);
      });

    setLoading(false);
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
        {loading ? (
          <ActivityIndicator size="small" />
        ) : (
          <FilledButton title="MOAR" onPress={handleRefresh} />
        )}
      </View>
    );
  };

  useEffect(() => {
    getImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
