import React from 'react';
import { Child } from './Child';
import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    /*     <Child color="red" onClick={() => console.log('Clicked')}>
      children text
    </Child> */
    <ChildAsFC color="red" onClick={() => console.log('Clicked')}>
      children text
    </ChildAsFC>
  );
};

export default Parent;
