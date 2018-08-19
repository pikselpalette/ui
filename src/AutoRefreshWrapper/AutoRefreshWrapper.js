import * as React from 'react';
import { Button } from 'semantic-ui-react';
import classNames from 'classnames';

const AutoRefreshWrapper = ({ theme, variant, ...props }) => (
  <Button
    className={
      classNames(
        'palette-ui-auto-refresh-wrapper',
        'button',
        { dark: theme === 'dark' },
        { green: variant === 'green' },
        { blue: variant === 'blue' }
      )
    }
    {...props}
  />
);

export default AutoRefreshWrapper;
