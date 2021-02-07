import React from "react";
import { Route, Switch } from "react-router-dom";

import SignUp from "./SignUp";
import Login from "./Login";
import DeleteProfile from "./DeleteProfile";
import Profile from "./Profile";
import EditProfile from "./EditProfile";

function AuthRouter(props) {
  const { modal, setModal } = props;

  return (
    <React.Fragment>
      <Switch>
        <Route exact path={`${props.match.path}/profile`} component={Profile} />
        <Route
          path={`${props.match.path}/profile/edit`}
          component={EditProfile}
        />
        <Route
          path={`${props.match.path}/delete/:id`}
          component={DeleteProfile}
        />
      </Switch>
    </React.Fragment>
  );
}

export default AuthRouter;
