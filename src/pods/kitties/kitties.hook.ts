import * as React from 'react';
import { petsEntityVm } from './kitties.vm';
import { getKittiesList } from './api/kitties.api';
import { mapKittiesListFromApiToVm } from './kitties.mapper';

export const KittiesList = () => {
  const [kittiesLisCollection, setKittiesListCollection] = React.useState<
    petsEntityVm[]
  >([]);

  const handleKittiesList = async () => {
    try {
      const kittiesListModel = await getKittiesList();
      const kittiesListVm = mapKittiesListFromApiToVm(
        kittiesListModel
      );
      setKittiesListCollection(kittiesListVm);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    kittiesLisCollection,
    handleKittiesList,
    setKittiesListCollection
  };
};
