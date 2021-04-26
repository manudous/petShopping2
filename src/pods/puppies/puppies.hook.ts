import * as React from 'react';
import { petsEntityVm } from './puppies.vm';
import { getPuppiesList } from './api/puppies.api';
import { mapPuppiesListFromApiToVm } from './puppies.mapper';

export const PuppiesList = () => {
  const [puppiesListCollection, setPuppiesListCollection] = React.useState<
    petsEntityVm[]
  >([]);

  const handlePuppiesList = async () => {
    try {
      const puppiesListModel = await getPuppiesList();
      const puppiesListVm = mapPuppiesListFromApiToVm(
        puppiesListModel
      );
      setPuppiesListCollection(puppiesListVm);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    puppiesListCollection,
    handlePuppiesList,
    setPuppiesListCollection
  };
};
