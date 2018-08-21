import * as React from 'react';
import { Icon } from 'semantic-ui-react';
import classNames from 'classnames';

const CancelIcon = ({ variant, ...props }) => (
  <Icon
    name='times'
    className={
      classNames(
        'palette-ui-cancel-icon',
        variant
      )
    }
    {...props}
  />
);

export default CancelIcon;
