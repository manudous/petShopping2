import * as apiModel from 'common/model/petShopping.model';
import * as viewModel from './puppies.vm';

export const mapPuppiesListFromApiToVm = (
  puppies: apiModel.petsEntityApi[]
): viewModel.petsEntityVm[] => {
  return puppies.map((puppie) => mapPuppiesFromApiToVm(puppie));
};

const mapPuppiesFromApiToVm = (
  puppie: apiModel.petsEntityApi
): viewModel.petsEntityVm => ({
  id: puppie.id,
  picUrl: puppie.picUrl,
  title: puppie.title,
  selected: false,
});
