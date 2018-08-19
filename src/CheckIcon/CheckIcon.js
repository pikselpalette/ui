import * as React from 'react';
import { Icon } from 'semantic-ui-react';
import classNames from 'classnames';

const CheckIcon = ({ variant, ...props }) => (
  <Icon className={classNames('palette-ui-check-icon', variant)} { ...props } />
);

export default CheckIcon;
