import * as React from 'react';
import { Button as SemanticButton } from 'semantic-ui-react';
import classNames from 'classnames';

export const Button = ({ type = 'light',...props }) => (
  <SemanticButton className={classNames("console-ui-button", type)} {...props} />
);

export default Button;

