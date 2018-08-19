import * as React from 'react';
import { Button } from 'semantic-ui-react';

export const ActionButton = ({ ...props }) => (
  <Button className="palette-ui-action-button" {...props} />
);

export const ActionButtons = ({ ...props }) => (
  <div className="palette-ui-action-buttons" {...props} />
);
