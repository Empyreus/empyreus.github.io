import React, { Component } from 'react';

import Camera, { IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import ImagePreview from './ImagePreview';

class CameraModule extends Component {
  state = {
    photo: null,
  }

  handleRetakePhoto = () => {
    console.log("Retake Photo")
    this.setState({
      photo: null
    })
  }

  handleAcceptPhoto = () => {
    console.log("Photo Accepted")
  }

  handleTakePhotoAnimationDone = (dataUri) => {
    console.log("Animation Finish Photo")
    this.setState({
      photo: dataUri
    })
  }
  
  render() {
    return (
      <div>
        {(this.state.photo)
          ? <ImagePreview
            dataUri={this.state.photo}
            isFullscreen={true}
            handleRetakePhoto={this.handleRetakePhoto}
            handleAcceptPhoto={this.handleAcceptPhoto}
          />
          : <Camera
            onTakePhotoAnimationDone={this.handleTakePhotoAnimationDone}
            isFullscreen={true}
          />
        }
      </div>
    )
  }
}

export default CameraModule;