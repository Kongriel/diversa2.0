import React from 'react';
import { useRouter } from 'next/router';

export const RuleDescription = () => {
  const router = useRouter();
  const { ruleId } = router.query;

  return (
    <div>
      <h1>Rule {ruleId}</h1>
      {/* Here you can include the description or any other content */}
    </div>
  );
};
