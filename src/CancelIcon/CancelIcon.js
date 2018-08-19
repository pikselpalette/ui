import * as React from 'react';
import { Icon } from 'semantic-ui-react';
import classNames from 'classnames';

const CancelIcon = ({ variant, ...props }) => (
  <Icon className={classNames('console-ui-cancel-icon', variant )} {...props} />
);

export default CancelIcon;
