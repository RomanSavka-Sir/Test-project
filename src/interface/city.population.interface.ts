import { CityMembersInterface } from './city.members.interface';

export interface CityPopulationInterface {
  city: string;
  count: number;
  members: CityMembersInterface[];
}
