import * as React from 'react';
import { Button } from 'semantic-ui-react';
import classNames = 'classnames';

export const ActionButton = ({ variant, ...props }) => (
  <Button className={classNames('palette-ui-action-button', variant)} {...props} />
);

export const ActionButtons = props => (
  <div className="palette-ui-action-buttons" {...props} />
);
