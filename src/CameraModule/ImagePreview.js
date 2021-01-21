import React from 'react';
import PropTypes from 'prop-types';

import './ImagePreview.css';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

export const ImagePreview = ({ dataUri, isFullscreen, handleRetakePhoto, handleAcceptPhoto }) => {
  let classNameFullscreen = isFullscreen ? 'demo-image-preview-fullscreen' : '';

  return (
    <div className={'demo-image-preview ' + classNameFullscreen}>
        <div className="IconRetake">
          <HighlightOffIcon style={{ fontSize: "5rem" }} onClick={handleRetakePhoto} />
        </div>
        <div className="IconAccept">
          <CheckCircleOutlineIcon style={{ fontSize: "5rem" }} onClick={handleAcceptPhoto} />
        </div>
      <img src={dataUri} />
    </div>
  );
};

ImagePreview.propTypes = {
  dataUri: PropTypes.string,
  isFullscreen: PropTypes.bool
};

export default ImagePreview;