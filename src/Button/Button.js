import * as React from 'react';
import { Button } from 'semantic-ui-react';
import classNames from 'classnames';

const StyledButton = ({ variant = 'light', ...props }) => (
  <Button className={classNames('palette-ui-button', variant)} {...props} />
);

export default StyledButton;
