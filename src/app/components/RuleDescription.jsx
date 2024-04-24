import React from 'react';

const RuleDescription = ({ ruleId }) => {
  // Fetch rule description based on the ruleID
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