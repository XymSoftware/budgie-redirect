import { Route } from 'react-router-dom';
import { paramsFromURL } from 'helpers';
import { routes } from 'controllers';
import { AuthRoute } from 'xerum';

const makeRoutes = (token, redirect) => {
  return routes?.map((route, index) => {
    const { path, element, authenticate } = route;

    const authElement = (
      <AuthRoute
        token={token}
        redirect={redirect}
        from={{ pathname: path, search: paramsFromURL() }}
      />
    );

    if (authenticate) {
      return (
        <Route key={index} element={authElement}>
          <Route path={path} element={element} />
        </Route>
      );
    }

    return <Route key={index} path={path} element={element} />;
  });
};

export { makeRoutes };