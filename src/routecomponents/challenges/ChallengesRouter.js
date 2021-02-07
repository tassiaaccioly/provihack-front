import React from "react";
import { Route, Switch } from "react-router-dom";

import Challenges from "./Challenges";
import Challenge from "./Challenge";
import DailyChallenges from "./DailyChallenges";
import BigChallenge from "./BigChallenge";
import Group from "./Group";

export default function ChallengeRouter(props) {
  const { modal, setModal } = props;

  return (
    <React.Fragment>
      <Switch>
        <Route
          exact
          path={`${props.match.path}/bigchallenge`}
          component={BigChallenge}
        />
        <Route
          exact
          path={`${props.match.path}/single`}
          component={Challenge}
        />
        <Route path={`${props.match.path}/daily`} component={DailyChallenges} />
        <Route exact path={`${props.match.path}/all`} component={Challenges} />
        <Route path={`${props.match.path}/group/:id`} component={Group} />
      </Switch>
    </React.Fragment>
  );
}
