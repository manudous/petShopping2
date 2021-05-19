import { petsEntityApi } from '../../../../common/model';
import { mockPuppies } from '../../../../common/mock/petShopping.mock';

let puppiesList = [...mockPuppies];

export const getPuppiesList = async (): Promise<petsEntityApi[]> => {
  return puppiesList;
};
