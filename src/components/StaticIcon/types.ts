
import { icons } from './icons';

export type StaticIcons = keyof typeof icons;

export type StaticIconProps = {
  name: StaticIcons;
  size?: string;
  testId?: string;
  onClick?: () => void;
};
