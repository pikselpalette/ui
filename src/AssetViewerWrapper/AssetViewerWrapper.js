import * as React from 'react';
import classNames from 'classnames';

const AssetViewerWrapper = ({ quickView, ...props }) => (
  <div
    className={classNames('palette-ui-asset-viewer-wrapper', { 'quick-view': quickView })}
    {...props}
  />
);

export default AssetViewerWrapper;
