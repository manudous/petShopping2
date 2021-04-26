import * as React from 'react';
import { AppLayout, CenteredLayout } from 'layouts';
import { PuppiesContainer } from 'pods/puppies/puppies.container';

export const PuppiesScene = () => (
  <CenteredLayout>
    <PuppiesContainer />
  </CenteredLayout>
);
