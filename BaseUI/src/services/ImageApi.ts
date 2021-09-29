import {ACCESS_KEY, ACCESS_TOKEN} from 'react-native-dotenv';
import {IApiImage, IPhotoDataResponse} from '../helpers/ts-helpers/interfaces';

const baseURL = 'https://api.unsplash.com';

class ImageApi<T> implements IApiImage<T> {
  private async init(page: number): Promise<Response> {
    return fetch(`${baseURL}/photos/?client_id=${ACCESS_KEY}&page=${page}`, {
      headers: {
        Accept: 'application/json',
      },
    });
  }

  private async auth(id: string, method: string): Promise<Response> {
    return fetch(`${baseURL}/photos/${id}/like`, {
      method: method,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
  }

  async fetchPhotos(page: number): Promise<Array<T>> {
    return this.init(page)
      .then(response => response.json())
      .then(data => {
        return data as T[];
      });
  }

  async likePhoto(id: string): Promise<T> {
    return this.auth(id, 'POST')
      .then(response => response.json())
      .then(data => {
        return data as T;
      });
  }

  async unlikePhoto(id: string): Promise<T> {
    return this.auth(id, 'DELETE')
      .then(response => response.json())
      .then(data => {
        return data as T;
      });
  }
}

export default new ImageApi<IPhotoDataResponse>();
