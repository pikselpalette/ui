import * as React from 'react';
import { Dropdown } from 'semantic-ui-react';
import classNames from 'classnames';

const ActionDropdown = ({ variant, ...props }) => (
  <Dropdown className={classNames('palette-ui-action-dropdown', variant)} {...props} />
);

export default ActionDropdown;
