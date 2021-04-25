import { petsEntityApi } from './kitties.api-model';
import { mockKitties } from './kitties.api-mocks';

let kittiesList = [...mockKitties];

export const getKittiesList = async (): Promise<petsEntityApi[]> => {
  return kittiesList;
};


