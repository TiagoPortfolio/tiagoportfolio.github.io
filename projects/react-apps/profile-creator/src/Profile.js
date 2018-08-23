import React from 'react';
import './profile.css';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.getAvatar = this.getAvatar.bind(this);
  }

  getAvatar() {
    let avatarShape = "";
    switch (this.props.globalState.avatarShape) {
      case 'circle':
        avatarShape = (
          <div className="avatar">
            <div className="circle">
              <img src="avatar.jpeg" />
            </div>
          </div>
        );
        break;
      case 'losange':
        avatarShape = (
          <div className="avatar">
            <div className="losange">
              <div className="los1">
                <img src="avatar.jpeg" />
              </div>
            </div>
          </div>
        );
        break;
      case 'diamond':
        avatarShape = (
          <div className="avatar">
            <div className="diamond">
              <div className="dia">
                <img src="avatar.jpeg" />
              </div>
            </div>
          </div>
        );
        break;
      case 'hexagon':
        avatarShape = (
          <div className="avatar">
            <div className="hexa">
              <div className="hex1">
                <div className="hex2">
                  <img src="avatar.jpeg" />
                </div>
              </div>
            </div>
          </div>
        );
        break;
      case 'octogon':
        avatarShape = (
          <div className="avatar">
            <div className="octo">
              <div className="octo1">
                <img src="avatar.jpeg" />
              </div>
            </div>
          </div>
        );
        break;
      default:
        avatarShape = (
          <div className="avatar">
            <div className="circle">
              <img src="avatar.jpeg" />
            </div>
          </div>
        );
        break;
    }

    return avatarShape;
  }
  
  getHobbies() {
    return this.props.globalState.hobbies.map(hobby => {
      return (
        <div key={hobby.id} className="hobby">
          {hobby.name}
        </div>
      );
    });
  }
  render() {
    const backgroundStyle = {
      background: "url(" + this.props.globalState.image.url + ") center no-repeat",
      backgroundSize: "cover"
    }

    return (
      <div className="profilePreview" style={backgroundStyle}>
        <div className="backgroundOverlay"></div>
        {this.getAvatar()}
        <div className="username">{this.props.globalState.username}</div>
        <div className="email"><em>{this.props.globalState.email}</em></div>
        <div className="intro">{this.props.globalState.intro}</div>
        <div className="hobbies">
          {this.getHobbies()}
        </div>
        <div className="background"></div>
      </div>
    );
  }
}