import React from 'react';
import { Switch, Route, Redirect  } from 'react-router-dom';
import { SHOP_ROUTE } from '../const';
import { authRoutes, publicRoutes } from '../routes';

const AppRouter = () => {
  const isAuth = false;
  return (
    <Switch>
      {isAuth && authRoutes.map(({ path, Component }) => 
        <Route key={path} path={path} component={Component} exact/>
      )}
      {publicRoutes.map(({ path, Component }) => 
        <Route key={path} path={path} component={Component} exact/>
      )}
      <Redirect to={SHOP_ROUTE}/>
    </Switch>
  );
};

export default AppRouter;