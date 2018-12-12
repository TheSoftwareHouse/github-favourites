export interface FavouriteItem {
   name: string,
   language: string,
}

export interface ApplicationContextProps {
  favourites: Array<FavouriteItem>,
  onAddFavourite?: (name: string, language: string) => void,
  onRemoveFavourite?: (index: number) => void,
}