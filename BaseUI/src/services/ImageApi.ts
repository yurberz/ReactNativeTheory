import {ACCESS_TOKEN} from 'react-native-dotenv';
import {
  IApiImage,
  IPhotoDataResponse,
  ISearchDataResponse,
} from '../helpers/ts-helpers/interfaces';
import {TArgFetchPhotos} from '../helpers/ts-helpers/types';
import request from './apiManager';
import {RequestType} from '../helpers/ts-helpers/enums';

class ImageApi<T> implements IApiImage<T> {
  private token: string = ACCESS_TOKEN;

  async fetchPhotos(arg: TArgFetchPhotos): Promise<T[]> {
    return request<T[]>(RequestType.fetchPhotos, {
      token: this.token,
      urlParams: arg,
    });
  }

  async searchPhotos(arg: object): Promise<T> {
    return request<T>(RequestType.searchPhotos, {
      token: this.token,
      urlParams: arg,
    });
  }

  async likePhoto(id: string[]): Promise<T> {
    return request<T>(RequestType.likePhoto, {
      token: this.token,
      params: id,
    });
  }

  async unlikePhoto(id: string[]): Promise<T> {
    return request<T>(RequestType.unlikePhoto, {
      token: this.token,
      params: id,
    });
  }
}

export const imageApi = new ImageApi<IPhotoDataResponse>();
export const searchImageApi = new ImageApi<ISearchDataResponse>();
