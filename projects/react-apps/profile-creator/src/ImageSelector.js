import React from 'react';
import {Motion, spring} from 'react-motion';

const images = [
  {
    id: 1,
    url: "img1.jpg"
  },
  {
    id: 2,
    url: "grey_background.jpg"
  },
  {
    id: 3,
    url: "grey_background.jpg"
  },
  {
    id: 4,
    url: "grey_background.jpg"
  },
  {
    id: 5,
    url: "grey_background.jpg"
  },
  {
    id: 6,
    url: "grey_background.jpg"
  }
];

export default class ImageSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSelected: this.props.imageSelected,
      selectorActive: false,
    };

    this.openImageSelector = this.openImageSelector.bind(this);
    this.handleImageSelector = this.handleImageSelector.bind(this);
  }

  getImages() {
    const selectElement = images.map((image) => {
      let imageActive = image.id === this.state.imageSelected.id ? 'active' : '';
      return (
        <img key={image.id} src={image.url} className={imageActive} onClick={() => this.handleImageSelector(image)}/>
      );
    });
    return selectElement;
  }

  openImageSelector() {
    this.setState({
      selectorActive: !this.state.selectorActive,
    });
  }

  handleImageSelector(image) {
    this.setState({
      imageSelected: image,
    });
    this.props.onImageChange(image);
  }

  render() {

    return (
      <Motion style={{x: spring(this.state.selectorActive ? 1 : 0)}}>
        {({x}) =>
          // children is a callback which should accept the current value of
          // `style`
          <div className="imageSelector">
            {!this.state.selectorActive &&
              <div className="activeImage">
                <img className="active" src={this.state.imageSelected.url} onClick={this.openImageSelector} />
                <span className="arrow-down" onClick={this.openImageSelector}></span>
              </div>
            }
            <div className="availableImages" style={{
              opacity: `${x}`,
            }}>
              {this.state.selectorActive &&
                this.getImages()
              }
            </div>
          </div>
        }
      </Motion>
    );
  }
}