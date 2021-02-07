import React from "react";
import { Route, Switch } from "react-router-dom";

import SignUp from "./SignUp";
import Login from "./Login";
import DeleteProfile from "./DeleteProfile";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import Feedback from "./Feedback";

function AuthRouter(props) {
  return (
    <React.Fragment>
      <Switch>
        <Route path={`${props.match.path}/signup`} component={SignUp} />
        <Route path={`${props.match.path}/login`} component={Login} />
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
