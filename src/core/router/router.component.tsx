import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { MainScene } from 'scenes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={MainScene} />
      </Switch>
    </HashRouter>
  );
};
