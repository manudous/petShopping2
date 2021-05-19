import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { KittiesComponent } from './kitties.component';
import { KittiesList } from './kitties.hook';

export const KittiesContainer: React.FC = () => {
  const { handleKittiesList, kittiesLisCollection, setKittiesListCollection } =
    KittiesList();

  React.useEffect(() => {
    handleKittiesList();
  }, []);

  return (
    <KittiesComponent
      kittiesListCollection={kittiesLisCollection}
      setKittiesListCollection={setKittiesListCollection}
    />
  );
};
