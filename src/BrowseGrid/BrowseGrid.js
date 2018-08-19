import * as React from 'react';
import { Grid } from 'semantic-ui-react';
import classNames from 'classnames';

const BrowseGrid = ({ variant, ...props }) => (
  <Grid className={classNames('palette-ui-browse-grid', variant)} {...props} />
);

export default BrowseGrid;
