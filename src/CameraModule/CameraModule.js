import React, { Component } from 'react';

import Camera, { IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import ImagePreview from './ImagePreview';

class CameraModule extends Component {
  state = {
    photo: null,
  }

  handleTakePhoto = (dataUri) => {
    // Do stuff with the photo...
    console.log('takePhoto');
    this.setState({
      photo: dataUri
    })
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

  render() {
    if (this.state.photo === null) {
      return (
        <Camera
          onTakePhoto={(dataUri) => { this.handleTakePhoto(dataUri) }}
          imageType={IMAGE_TYPES.JPG}
          isFullscreen={true}
        />
      )
    }
    else if (this.state.photo !== null) {
      return (
        <ImagePreview dataUri={this.state.photo}
          isFullscreen={true}
          handleRetakePhoto={this.handleRetakePhoto}
          handleAcceptPhoto={this.handleAcceptPhoto}
        />
      )
    }
  }
}

export default CameraModule;