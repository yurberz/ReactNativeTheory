export type TPhotoModel = {
  id: string;
  imageUrl?: string;
  profileImageUrl?: string;
  name?: string;
  isLiked?: boolean;
  likes?: number;
  liked_by_user?: boolean;
};

export type TNativeEvent = {
  text: string;
};

export type TSortButton = {
  id: string;
  title: string;
};

export type TArgFetchPhotos = {
  page: number;
  order_by: string;
};

export type TArgSearchPhotos = string;

export type TPhoto = {
  id: string;
  liked_by_user: boolean;
  likes: number;
};
