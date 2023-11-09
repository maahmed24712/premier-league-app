import React from 'react';
import NationsGrid from './NationsGrid';
import { nations } from './NationData';

function Nations() {
  return (
    <div className="teams-page">
      <h2 style={{textAlign:'center'}}>Nations</h2>
      <NationsGrid nations={nations} />
    </div>
  );
}

export default Nations;