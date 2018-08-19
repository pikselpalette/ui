import * as React from 'react';
import { Button } from 'semantic-ui-react';
import classNames from 'classnames';

const AutoRefreshWrapper = ({ theme, type, ...props }) => (
  <Button
    className={
      classNames(
        'palette-ui-auto-refresh-wrapper',
        'button',
        { dark: theme === 'dark' },
        { green: type === 'green' },
        { blue: type === 'blue' }
      )
    }
    {...props}
  />
);

export default AutoRefreshWrapper;
