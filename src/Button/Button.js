import * as React from 'react';
import { Button as SemanticButton } from 'semantic-ui-react';
import classNames from 'classnames';

const Button = ({ variant = 'light', ...props }) => (
  <SemanticButton className={classNames('palette-ui-button', variant)} {...props} />
);

export default Button;
