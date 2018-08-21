import * as React from 'react';
import classNames from 'classnames';

const Centered = ({ horizontal, vertical, ...props}) => (
  <div
    className={
      classNames(
        'palette-ui-centered',
        { horizontal },
        { vertical }
      )
    }
    {...props}
  />
);

export default Centered;
