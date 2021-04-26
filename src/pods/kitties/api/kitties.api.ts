import { petsEntityApi } from 'common/model';
import { mockKitties } from 'common/mock/petShopping.mock';

let kittiesList = [...mockKitties];

export const getKittiesList = async (): Promise<petsEntityApi[]> => {
  return kittiesList;
};
