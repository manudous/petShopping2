import * as apiModel from './api/kitties.api-model';
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
