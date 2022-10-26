import { ReactNode } from 'react';

export interface CollapsibleProps {
  open?: boolean;
  startsOpen?: boolean;
  externalControl?: boolean;
  onClick?: (openState: boolean) => void;
  testId?: string;
  children: ReactNode[];
}

export enum CollapsibleStatus {
  Closed = 0,
  Closing,
  Opened,
  Opening,
}
