import * as React from 'react';
import { Button as SemanticButton } from 'semantic-ui-react';
import classNames from 'classnames';

export const Button = ({
  children,
  type = 'light',
  ...props
}) => (
  <SemanticButton
    {...props}
    className={classNames('console-ui-button', type)}
  >
    {children}
  </SemanticButton>
);

export default Button;

