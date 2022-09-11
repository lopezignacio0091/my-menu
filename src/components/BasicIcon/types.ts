import { icons } from './icons';

export type Icons = keyof typeof icons;

export type IconProps = {
  id?: string;
  name: Icons;
  size?: string;
  color?: string;
  onClick?: () => void;
};
