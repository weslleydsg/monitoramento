import React from 'react';
import { Route } from 'react-router-dom';

import DefaultLayout from '../templates/layout_default';

interface RouteParams {
  component: React.FC;
  [x: string]: any;
}

const RouteWrapper: React.FC<RouteParams> = ({
  component: Component,
  ...rest
}) => {
  const Layout = DefaultLayout;

  return (
    <Route {...rest}>
      <Layout>
        <Component />
      </Layout>
    </Route>
  );
};

export default RouteWrapper;
