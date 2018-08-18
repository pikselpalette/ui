import { Button } from 'semantic-ui-react';
import classNames from 'classNames';

const AutoRefreshWrapper = ({ theme, type, ...props}) => (
  <Button
    className={
      classNames(
        'console-ui-auto-refresh-wrapper',
        'button',
        { 'dark': theme === 'dark' }
        { 'green': type === 'green' }
        { 'blue': type === 'blue' }
      )
    }
    {...props}
  />
);

export default AutoRefreshWrapper;

