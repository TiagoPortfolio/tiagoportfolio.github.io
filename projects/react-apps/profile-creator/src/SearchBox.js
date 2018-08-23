import React from 'react';
import {Motion, spring} from 'react-motion';

const hobbies = [
  {id: 1,  name: 'Acting'},
  {id: 2,  name: 'Basketball'},
  {id: 3,  name: 'Board Games'},
  {id: 4,  name: 'Chess'},
  {id: 5,  name: 'Coding'},
  {id: 6,  name: 'Cooking'},
  {id: 7,  name: 'Dance'},
  {id: 8,  name: 'Fashion'},
  {id: 9,  name: 'Football'},
  {id: 10, name: 'Gardening'},
  {id: 11, name: 'Guitar'},
  {id: 12, name: 'Knitting'},
  {id: 13, name: 'Magic'},
  {id: 14, name: 'Movies'},
  {id: 15, name: 'Lego Building'},
  {id: 16, name: 'Music'},
  {id: 17, name: 'Paintball'},
  {id: 18, name: 'Painting'},
  {id: 19, name: 'Photography'},
  {id: 20, name: 'Piano'},
  {id: 21, name: 'Puzzles'},
  {id: 22, name: 'Read'},
  {id: 23, name: 'Singing'},
  {id: 24, name: 'Sports'},
  {id: 25, name: 'Traveling'},
  {id: 26, name: 'TV Shows'},
  {id: 27, name: 'Video Games'},
  {id: 28, name: 'Writing'},
];

export default class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hobbiesFound: hobbies,
      searchTerm: '',
      showHobbiesFound: false
    };

    this.getHobbies = this.getHobbies.bind(this);
    this.searchHobby = this.searchHobby.bind(this);
    this.handleHobby = this.handleHobby.bind(this);
    this.handleMouseClick = this.handleMouseClick.bind(this);
  }

  componentDidMount () {
    window.addEventListener('mousedown', this.handleMouseClick);
  }

  componentWillUnmount () {
    window.removeEventListener('mousedown', this.handleMouseClick);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.hobbiesFound.length != this.state.hobbiesFound.length) {
      document.getElementsByName("hobbies")[0].focus();
    }
  }

  handleMouseClick(e) {
    const showHobbiesFound = e.target.closest('.hobbySelector') !== null && this.state.showHobbiesFound;
    console.log(e.target.closest('.hobbySelector'));
    console.log(this.state.showHobbiesFound);
    if (e.target.closest('.hobbySelector') === null) {
      console.log("remove!!");
      document.getElementsByClassName("hobbyFakeInput")[0].classList.remove("focused");
    }
    this.setState({showHobbiesFound});
  }

  getHobbies() {
    const handleHobby = this.handleHobby;
    const hobbiesList = this.state.hobbiesFound.map((hobby) => {
      return (
        <li key={hobby.id} onClick={() => handleHobby(hobby, 'add')}>
          {hobby.name}
          <span className="addHobby">
            +
          </span>
        </li>
      );
    });
    return hobbiesList;
  }

  getHobbiesSelected() {
    const handleHobby = this.handleHobby;
    const hobbiesSelected = this.props.hobbiesSelected.map((hobby) => {
      return (
        <div key={hobby.id} className="hobbyBox">
          <span className="removeHobby" onClick={() => handleHobby(hobby, 'remove')}>
            x
          </span>
          <span className="hobbyName">
            {hobby.name}
          </span>
        </div>
      );
    });
    return hobbiesSelected;
  }

  searchHobby(e) {
    const hobbyFakeInputClass = document.getElementsByClassName("hobbyFakeInput")[0];
    if (!hobbyFakeInputClass.className.includes("focused")) {
      hobbyFakeInputClass.className += " focused";
    }
    if (e.target.value.length) {
      const hobbiesSelected = this.props.hobbiesSelected;
      const hobbiesFound = hobbies.filter(hobby => {
        return hobby.name.toLowerCase().includes(e.target.value.toLowerCase()) && !hobbiesSelected.includes(hobby);
      })
      this.setState({
        hobbiesFound: hobbiesFound,
        searchTerm: e.target.value,
        showHobbiesFound: true,
      });
    } else {
      this.setState({
        hobbiesFound: [],
        searchTerm: e.target.value,
        showHobbiesFound: true,
      });
    }
  }

  handleHobby(hobbySelected, action) {
    const searchTerm = this.state.searchTerm;
    const hobbiesSelected = this.props.hobbiesSelected;
    const hobbiesFound = (action === 'add' ?
      this.state.hobbiesFound.filter(hobby => {
        return !hobby.name.toLowerCase().includes(hobbySelected.name.toLowerCase()) && !hobbiesSelected.includes(hobby);
      }) :
      hobbies.filter(hobby => {
        return hobby.name.toLowerCase().includes(searchTerm.toLowerCase()) && !hobbiesSelected.includes(hobby);
      })
    );
    this.setState({
      searchTerm: action === 'add' ? '' : searchTerm,
      hobbiesFound,
      showHobbiesFound: false,
    });
    this.props.handleHobbySelector(hobbySelected, action);
  }

  render() {
    return (
      <Motion style={{x: spring(this.state.showHobbiesFound ? 1 : 0)}}>
        {({x}) =>
          <div className="hobbySelector" onBlur={this.handleBlur}>
            <div className="hobbyFakeInput">
              <div className="hobbiesSelected">
                {this.getHobbiesSelected()}
              </div>
              <div className="hobbyInput">
                <input type="text" name="hobbies"
                  placeholder="Add hobbies to your profile"
                  autoComplete="off"
                  value={this.state.searchTerm}
                  onFocus={this.searchHobby}
                  onChange={this.searchHobby}
                />
              </div>
            </div>
            <div className="hobbiesList" style={{
              opacity: x,
            }}>
              {this.state.showHobbiesFound &&
                <ul>
                  {this.getHobbies()}
                </ul>
              }
            </div>
          </div>
        }
      </Motion>
    );
  }
}