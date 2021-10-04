import {createSlice} from '@reduxjs/toolkit';
import {IPhotosState} from '../../helpers/ts-helpers/interfaces';
import {
  fetchPhotos,
  addLike,
  deleteLike,
  searchPhotos,
} from '../actions/async/photosOperations';

const initialState: IPhotosState = {
  items: [],
  loading: false,
  error: undefined,
};

export const photoSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    clearImagesData: state => {
      state.items = [];
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchPhotos.pending, (state, _) => {
      state.loading = true;
    });
    builder.addCase(fetchPhotos.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.items = payload;
    });
    builder.addCase(fetchPhotos.rejected, (state, {error}) => {
      state.loading = false;
      state.error = error.message;
    });

    builder.addCase(searchPhotos.pending, (state, _) => {
      state.loading = true;
    });
    builder.addCase(searchPhotos.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.items = payload;
    });
    builder.addCase(searchPhotos.rejected, (state, {error}) => {
      state.loading = false;
      state.error = error.message;
    });

    builder.addCase(addLike.fulfilled, (state, {payload}) => {
      const images = state.items.map(image => {
        image.id === payload.id
          ? (image = {
              ...image,
              isLiked: payload.liked_by_user,
              likes: payload.likes,
            })
          : image;

        return image;
      });

      return {...state, items: [...images]};
    });
    builder.addCase(addLike.rejected, (state, {error}) => {
      state.error = error.message;
    });

    builder.addCase(deleteLike.fulfilled, (state, {payload}) => {
      const images = state.items.map(image => {
        image.id === payload.id
          ? (image = {
              ...image,
              isLiked: payload.liked_by_user,
              likes: payload.likes,
            })
          : image;

        return image;
      });

      return {...state, items: [...images]};
    });
    builder.addCase(deleteLike.rejected, (state, {error}) => {
      state.error = error.message;
    });
  },
});

export default photoSlice.reducer;
export const {clearImagesData} = photoSlice.actions;
