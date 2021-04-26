import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { PuppiesComponent } from './puppies.component';
import { PuppiesList } from './puppies.hook';

export const PuppiesContainer: React.FC = () => {
  const {
    handlePuppiesList,
    puppiesListCollection,
    setPuppiesListCollection,
  } = PuppiesList();

  React.useEffect(() => {
    handlePuppiesList();
  }, []);

  return (
    <PuppiesComponent
      puppiesListCollection={puppiesListCollection}
      setPuppiesListCollection={setPuppiesListCollection}
    />
  );
};
