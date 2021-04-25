import * as React from 'react';
import { AppLayout, CenteredLayout } from 'layouts';
import { KittiesContainer } from 'pods/kitties/kitties.container';

export const KittiesScene = () => (
  <CenteredLayout>
    <AppLayout>
      <KittiesContainer />
    </AppLayout>
  </CenteredLayout>
);
