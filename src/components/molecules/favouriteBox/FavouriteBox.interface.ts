export interface FavouriteBoxProps {
  onDelete: () => void,
  language: string,
  name: string,
  to: string,
}

export interface FavouriteBoxState {
  isMenuOpened: boolean,
  menuWidth: number,
}