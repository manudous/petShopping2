import * as React from 'react';
import { petsEntityVm } from './puppies.vm';
import * as classes from 'common/styles/petShopping.styles';

interface Props {
  puppiesListCollection: petsEntityVm[];
  setPuppiesListCollection: (puppiesList) => void;
}

export const PuppiesComponent: React.FC<Props> = (props) => {
  const { puppiesListCollection, setPuppiesListCollection } = props;

  return (
    <div className={classes.root}>
      <h1>Puppies</h1>
      <ul className={classes.list}>
        {puppiesListCollection.map((puppie) => (
          <li key={puppie.id}>{puppie.title}</li>
        ))}
      </ul>
    </div>
  );
};
