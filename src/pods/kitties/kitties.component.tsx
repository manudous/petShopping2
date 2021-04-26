import * as React from 'react';
import { petsEntityVm } from './kitties.vm';
import * as classes from 'common/styles/petShopping.styles';

interface Props {
  kittiesListCollection: petsEntityVm[];
  setKittiesListCollection: (kittiesList) => void;
}

export const KittiesComponent: React.FC<Props> = (props) => {
  const { kittiesListCollection, setKittiesListCollection } = props;

  return (
    <div className={classes.root}>
      <h1>Kitties</h1>
      <ul className={classes.list}>
        {kittiesListCollection.map((kittie) => (
          <li key={kittie.id}>{kittie.title}</li>
        ))}
      </ul>
    </div>
  );
};
