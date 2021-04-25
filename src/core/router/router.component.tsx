import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { KittiesScene } from 'scenes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Switch>
        <Switch>
          <Route path="/" component={KittiesScene} />
        </Switch>
      </Switch>
    </HashRouter>
  );
};
