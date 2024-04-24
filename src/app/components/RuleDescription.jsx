import React from 'react';
import { useRouter } from 'next/router';

const RuleDescription = () => {
  const router = useRouter();
  const { ruleId } = router.query;

  // fetch rule desciption based on the ruleID
  // For demo purposes, we're just displaying a static description here

  const ruleDescription = `Description for Rule ${ruleId}`;

  return (
    <div>
      <h1>Rule {ruleId}</h1>
      <p>{ruleDescription}</p>
    </div>
  );
};

export default RuleDescription;