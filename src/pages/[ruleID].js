import React from 'react';
import { useRouter } from 'next/router';
import RuleDescription from '../../app/components/RuleDescription';

const RulePage = () => {
  const router = useRouter();
  const { ruleID } = router.query;

  return <RuleDescription ruleId={ruleID} />;
};

export default RulePage;