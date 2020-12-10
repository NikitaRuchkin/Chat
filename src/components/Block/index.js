import React from 'react';
import classNames from 'classnames';

import './Block.scss';

const Block = ({ children, className }) => (
  <div className={classNames('block', className)}>
    {children}
    <div></div>
  </div>
);

export default Block;
