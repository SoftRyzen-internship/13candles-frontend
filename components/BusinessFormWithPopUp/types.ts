import { IBusinessInput } from '@/components/BusinessInput/types';
import { SuccessT } from '../SuccessNotification/types';

export type PopUpType = 'default' | 'success' | 'error';

type TitleDataT = {
  hero: string;
  contacts: string;
};

type NotificationsDataT = {
  success: SuccessT;
  error: string;
};

export type FormStaticDataT = {
  title: TitleDataT;
  inputs: IBusinessInput[];
  button: string;
  notifications: NotificationsDataT;
};

export interface BusinessFormWithPopUpProps {
  staticData: FormStaticDataT;
  className?: string;
}