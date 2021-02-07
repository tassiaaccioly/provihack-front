import React from "react";

import ChallengeWheel from "../../components/ChallengeWheel";
import BigChallengeCard from "../../components/BigChallengeCard";

export default function Challenges() {
  return (
    <>
      <section>
        <BigChallengeCard />
      </section>
      <section>
        <ChallengeWheel />
      </section>
    </>
  );
}
