import * as React from 'react';
import { Button } from 'semantic-ui-react';
import classNames from 'classnames';

const AutoRefreshWrapper = ({ variant = 'light', color, ...props }) => (
  <Button
    className={
      classNames(
        'palette-ui-auto-refresh-wrapper',
        'button',
        variant,
        color
      )
    }
    {...props}
  />
);

export default AutoRefreshWrapper;
