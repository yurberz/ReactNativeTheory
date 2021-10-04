import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  TArgFetchPhotos,
  TArgSearchPhotos,
  TPhotoModel,
} from '../../../helpers/ts-helpers/types';
import {imageApi, searchImageApi} from '../../../services/ImageApi';
import {RootState} from '../../store';

export const fetchPhotos = createAsyncThunk<
  TPhotoModel[],
  TArgFetchPhotos,
  {state: RootState}
>('photos/fetchPhotos', async (arg, {rejectWithValue, getState}) => {
  try {
    const {page, order_by} = arg;

    const response = await imageApi.fetchPhotos({page, order_by});

    const data = response.map(item => ({
      id: item.id,
      imageUrl: item.urls?.small,
      profileImageUrl: item.user?.profile_image?.small,
      name: item.user?.name,
      isLiked: item.liked_by_user,
      likes: item.likes,
    }));

    const prevData = getState().photos.items;

    if (page > 1) {
      return [...prevData, ...data];
    }

    return data;
  } catch (err) {
    console.log('fetchPhotos error:', err);

    return rejectWithValue(err);
  }
});

export const searchPhotos = createAsyncThunk<TPhotoModel[], TArgSearchPhotos>(
  'photos/searchPhotos',
  async (arg, {rejectWithValue}) => {
    const value = {query: arg};

    try {
      const {results} = await searchImageApi.searchPhotos(value);

      const data = results.map(item => ({
        id: item.id,
        imageUrl: item.urls?.small,
        profileImageUrl: item.user?.profile_image?.small,
        name: item.user?.name,
        isLiked: item.liked_by_user,
        likes: item.likes,
      }));

      return data;
    } catch (err) {
      console.log('searchPhotos error:', err);

      return rejectWithValue(err);
    }
  },
);

export const addLike = createAsyncThunk<TPhotoModel, string[]>(
  'photos/addLike',
  async (id: string[], {rejectWithValue}) => {
    try {
      const {photo} = await imageApi.likePhoto(id);

      return photo;
    } catch (err) {
      console.log('addLike error:', err);
      return rejectWithValue(err);
    }
  },
);

export const deleteLike = createAsyncThunk<TPhotoModel, string[]>(
  'photos/deleteLike',
  async (id: string[], {rejectWithValue}) => {
    try {
      const {photo} = await imageApi.unlikePhoto(id);

      return photo;
    } catch (err) {
      console.log('addLike error:', err);
      return rejectWithValue(err);
    }
  },
);
