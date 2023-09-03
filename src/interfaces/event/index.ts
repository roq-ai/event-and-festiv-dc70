import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface EventInterface {
  id?: string;
  title: string;
  date: any;
  location: string;
  description: string;
  organizer_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface EventGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  location?: string;
  description?: string;
  organizer_id?: string;
}
