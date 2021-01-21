import React, { Component } from 'react';

import Camera, { IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import ImagePreview from './ImagePreview';

class CameraModule extends Component {
  state = {
    photo: null,
    error: 0
  }

  handleTakePhoto = (dataUri) => {
    // Do stuff with the photo...
    console.log('takePhoto');
    console.log(dataUri);
    this.setState({
      photo: dataUri
    })
  }

  handleCameraError = (dataUri) => {
    this.setState({ error: 1 });
  }

  render() {
    const isFullscreen = true;


    if (this.state.error) {
      return <p>Bogged Camera</p>
    }
    else if (this.state.photo === null) {
      return (<Camera
        onTakePhoto={(dataUri) => { this.handleTakePhoto(dataUri) }}
        onCameraError={(error) => { this.handleCameraError(error) }}
        imageType={IMAGE_TYPES.JPG}
        isFullscreen={isFullscreen}
      />)
    }
    else if (this.state.photo !== null) {
      return (

          <ImagePreview dataUri={this.state.photo}
            isFullscreen={isFullscreen}
          />
      )
    }
  }
}

export default CameraModule;