import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { KittiesScene } from 'scenes';
import { PuppiesScene } from '../../scenes/puppies.scene';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={KittiesScene} />
        <Route exact path="/puppies" component={PuppiesScene} />
      </Switch>
    </HashRouter>
  );
};
