import React from 'react';
import HelloWorld from '../containers/HelloWorld';

const HelloWorldApp = props => {
  const reactComponent = (
    <HelloWorld {...props} />
  );
  return reactComponent;
};

export default HelloWorldApp;
