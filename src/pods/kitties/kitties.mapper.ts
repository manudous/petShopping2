import * as apiModel from 'common/model/petShopping.model';
import * as viewModel from './kitties.vm';

export const mapKittiesListFromApiToVm = (
  kitties: apiModel.petsEntityApi[]
): viewModel.petsEntityVm[] => {
  return kitties.map((kittie) => mapKittiesFromApiToVm(kittie));
};

const mapKittiesFromApiToVm = (
  kittie: apiModel.petsEntityApi
): viewModel.petsEntityVm => ({
  id: kittie.id,
  picUrl: kittie.picUrl,
  title: kittie.title,
  selected: false,
});
