import React from "react";
import { Route, Switch } from "react-router-dom";

import Challenges from "./Challenges";
import Challenge from "./Challenge";
import DailyChallenges from "./DailyChallenges";
import Group from "./Group";

export default function ChallengeRouter(props) {
  return (
    <React.Fragment>
      <Switch>
        <Route
          exact
          path={`${props.match.path}/challenges`}
          component={Challenges}
        />
        <Route
          exact
          path={`${props.match.path}/challenge`}
          component={Challenge}
        />
        <Route
          path={`${props.match.path}/challenges/daily`}
          component={DailyChallenges}
        />
        <Route path={`${props.match.path}/group/:id`} component={Group} />
      </Switch>
    </React.Fragment>
  );
}
