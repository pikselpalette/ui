import * as React from 'react';
import { Button } from 'semantic-ui-react';

export const ActionButton = ({ ...props }) => (
  <Button className="console-ui-action-button" {...props} />
);

export const ActionButtons = ({ ...props }) => (
  <div className="console-ui-action-buttons" {...props} />
);

