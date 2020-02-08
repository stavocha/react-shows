
import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useAuth0 } from "../react-auth0-spa";


const PrivateRoute = ({ component: WrappedComponent, path, ...rest }) => {
  const { loading, isAuthenticated, loginWithRedirect } = useAuth0();
  const hash = window.location.hash;

  useEffect(() => {
    if (loading || isAuthenticated) {
      return;
    }
    const fn = async () => {
        console.log();
        debugger
      await loginWithRedirect({
        appState: { targetUrl: hash }
      });
    };
    fn();
  }, [loading, isAuthenticated, loginWithRedirect, hash]);

  const render = props =>
    isAuthenticated === true ? <WrappedComponent {...props} /> : null;

  return <Route path={path} render={render} {...rest} />;
};

export default PrivateRoute;