import * as React from 'react';
import classNames from 'classnames';

const AssetViewerWrapper = ({ quickView, variant = 'light', ...props }) => (
  <div
    className={classNames('palette-ui-asset-viewer-wrapper', { 'quick-view': quickView }, variant)}
    {...props}
  />
);

export default AssetViewerWrapper;
